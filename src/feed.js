import React from 'react';
import "./feed.css";
import StoryReel from './storyreel';
import MessageSender from './MessageSender';


function Feed() {
   
    return (
        <div className ='feed'>
            <StoryReel/>
            <MessageSender/>

            
         </div>
    );
}

export default Feed;
