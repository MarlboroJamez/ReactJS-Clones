import React from 'react';
import '../css/post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, username, timestamp, message }) {
    return (
        <div className='post'>
            <div class="post__top">
                <Avatar src={profilePic} className='post__avatar' />
                <div class="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div class="post__bottom">
                <p>{message}</p>
            </div>

            <div class="post__image">
                <img src={image} alt="" />
            </div>

            <div class="post__options">
                <div class="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div class="post__option">
                    <ChatBubbleOutlineOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div class="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div class="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}

export default Post
