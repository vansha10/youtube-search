import React from 'react';
import useChannel from '../hooks/useChannel';

const ChannelDetails = ({ video }) => {
    const channel = useChannel(video);

    if (!channel) {
        return <div></div>   
    }
    return (
        <div className='ui segment'>
            <img className='ui small circular image' src={channel.thumbnails.medium.url} alt={channel.title}/>
            <h3 className='ui header'>{channel.title}</h3>
            <p>{channel.description}</p>
        </div>  
    );
}

export default ChannelDetails;