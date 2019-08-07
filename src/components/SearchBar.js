import React, { Component } from 'react'
import {Paper, TextField} from '@material-ui/core';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchTitle : ''
        }
    }

    handleSubmit =(event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.searchTitle);

    }

    handleChange = (event) => {
        this.setState({
            searchTitle : event.target.value
        })
    }

    render() {
        return (
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
            </Paper>
        )
    }
}

export default SearchBar
