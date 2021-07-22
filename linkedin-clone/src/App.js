import React, { useEffect } from 'react';
import Header from './components/header/header';
import './styles/App.css';
import Body from './components/body/body';
import {useDispatch, useSelector} from 'react-redux';
import Login from './components/login/login';
import { auth } from './components/firebase/firebase';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);

  return (
    <div className="app">
      <Header/>
        {!user ? (
          <Login/>
          ): ( 
            <Body/>
          )
        }     
    </div>
  );
}

export default App;
