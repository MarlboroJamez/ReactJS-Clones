import React from 'react';
import '../css/feed.css';
import StoryReel from '../components/storyReel';
import MessageSender from '../components/messageSender';

function feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
        </div>
    )
}

export default feed
