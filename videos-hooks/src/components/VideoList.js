import React from 'react';
import VideoItem from './VideoItem';

// es2015 syntax to just get videos from props
const VideoList = (props) => {
    const renderedList = props.videos.map((video) => {
        return (
        <VideoItem 
            key={video.id.videoId}
            video={video} 
            onVideoSelect={props.onVideoSelect}
        />
        );
    })

    return <div className='ui relaxed divided list'>{renderedList}</div>
};

export default VideoList;