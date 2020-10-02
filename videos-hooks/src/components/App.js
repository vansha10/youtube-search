import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import ChannelDetails from './ChannelDetails';
import useVideos from '../hooks/useVideos';

const App = () => {
    const [selectedVideo, setSelected] = useState(null);
    const [videos, search] = useVideos('React JS');

    useEffect(() => {
        setSelected(videos[0]);
    }, [videos]);

    return (
        <div className="ui container">
            <SearchBar onTermSubmit={search} />
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={videos} onVideoSelect={setSelected} />
                    </div>
                </div>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <ChannelDetails video={selectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;