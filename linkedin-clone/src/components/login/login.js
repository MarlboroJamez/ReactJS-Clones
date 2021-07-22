import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../../styles/login.css';
import {auth} from '../firebase/firebase';
import {login} from '../../features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
          .then(userAuth => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileUrl: userAuth.user.photoURL,
            }))
          })
          .catch(error => alert(error));
      };
    
      const register = () => {
        if (!name) {
          return alert("Please enter a full name");
        };
    
        auth.createUserWithEmailAndPassword(email, password)
          .then(userAuth => {
            userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
              dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              }))
            })
          }).catch(error => alert(error));
      };

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registering)"/>
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile pic URL (optional)"/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a memeber?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
