import React, { useState } from 'react';
import '../css/messageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import { useStateValue } from '../components/stateProvider';
import db from '../components/firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{ user }, dispatch] = useStateValue()
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
        })


        setInput('')
        setImageUrl('')
    }

    return <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" className="messageSender__input" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input placeholder="Image Url (optional) " value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    <button onclick={handleSubmit} type="submit"></button>
                </form>
            </div>
            
            <div className="messageSender__button">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: "red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: "green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: "orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
}

export default MessageSender
