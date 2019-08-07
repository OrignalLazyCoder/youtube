import React from 'react'
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core'

function VideoList({videoList,onVideoSelect}) {
    console.log(videoList , "From List")
    const listOfVideo =  videoList.map((video,key)=> <VideoItem key={key} onVideoSelect={onVideoSelect} video={video} />)
    console.log(listOfVideo)
    return (
        <Grid container spacing={10}>
            {listOfVideo}
        </Grid>
    )
}

export default VideoList
