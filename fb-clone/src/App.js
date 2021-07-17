import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Feed from './components/feed';
import Widgets from './components/widgets';
import Login from './components/login';
import { useStateValue } from './components/stateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
       {!user ? (
        <Login />
      ) : (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
