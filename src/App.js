import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Youtube from './api/Youtube';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList'

class App extends Component {

    constructor(props){
        super(props);

        this.state ={
            videos : [],
            selectedVideo : null
        }
    }

    componentDidMount(){
        this.handleSubmit('ReactJS')
    }

    handleSubmit = async (searchTerm) => {
        const response = await Youtube.get("search", {
            params: {
              part: "snippet",
              maxResults: 5,
              key: {Your YOUTUBE api},
              q: searchTerm,
            }
          });
          this.setState({
              videos : response.data.items,
              selectedVideo : response.data.items[0]
          })
    }

    handleVideoSelect = (video) => {
        this.setState({
            selectedVideo : video
        })
    }

    render() {
        return (
            <div>
                <Grid justify="center" container spacing={10}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <Grid item xs={12}>
                                <SearchBar onFormSubmit={this.handleSubmit}/> 
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetails video = {this.state.selectedVideo} />
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videoList = {this.state.videos} onVideoSelect={this.handleVideoSelect}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App
