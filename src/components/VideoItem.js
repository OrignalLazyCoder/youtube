import React from 'react'
import {Grid,Paper,Typography} from '@material-ui/core'
import { flexbox } from '@material-ui/system';

function VideoItem({video,onVideoSelect}) {
    return (
        <div>
            <Grid item xs={12}>
                <Paper style={{
                    display:flexbox,
                    alignItems : 'center',
                    cursor: 'pointer'
                }} onClick = {()=>{
                    onVideoSelect(video)
                }}>
                    <Typography variant="subtitle1">
                        <img style = {{
                            marginRight : '20px'
                        }}
                        alt="thumbnail"
                        src = {video.snippet.thumbnails.medium.url} />
                            <b>
                                {video.snippet.title}
                            </b>
                    </Typography>
                </Paper>
            </Grid>
        </div>
    )
}

export default VideoItem
