import React, { useEffect, useState } from 'react';
import '../../../styles/feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './inputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './post';
import {db} from '../../firebase/firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import {selectUser} from '../../../features/userSlice';
import FlipMove from 'react-flip-move';


function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);

    useEffect(() => {
        //real time connection to database
        db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, []);

    const sendPost = e => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        //resetting the input value
        setInput('');
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#C7A33C"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>

            <FlipMove>
                {posts.map(({id, data: {name, description, message, photoUrl}}) => (
                    <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl}/>
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
