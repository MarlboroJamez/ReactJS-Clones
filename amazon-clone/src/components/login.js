import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''/>
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                <h5>E-mail</h5>
                    <input type='text' value='' onChange='' />
                    <h5>Password</h5>
                    <input type='password' value='' onChange='' />
                    <button type='submit' onClick='' className='login__signInButton'>Sign In</button>

                    <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button onClick='' className='login__registerButton'>Create your Amazon Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
