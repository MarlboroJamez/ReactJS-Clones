import React from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>

      {/* Body */}
      <div className="app__body">
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
