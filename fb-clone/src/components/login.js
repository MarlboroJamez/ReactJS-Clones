import React from 'react';
import { Button } from '@material-ui/core';
import '../css/login.css';
import { auth, provider } from '../components/firebase';
import { actionTypes } from '../components/reducer';
import { useStateValue } from '../components/stateProvider';

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        // sign In
        auth.signInWithPopup(provider)
            .then(result => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
                console.log(result.user);
            }).catch((error) => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="" />

                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login
