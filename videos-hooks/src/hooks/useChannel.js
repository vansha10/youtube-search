import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useChannel = (video) => {
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        getChannelDetails();
    }, [video]);

    const getChannelDetails = () => {
        if (!video) {
            return;
        }
        const channelId = video.snippet.channelId;
        if (!channelId)
            return;
        youtube.get('/channels', {
            params: {
                id: channelId
            }
        }).then(response => {
            console.log(response);
            setChannel(response.data.items[0].snippet);
        })
    }

    return channel;
}

export default useChannel;