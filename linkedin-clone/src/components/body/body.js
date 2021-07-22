import React from 'react';
import '../../styles/body.css';
import Sidebar from './templates/sidebar';
import Feed from './templates/feed';

function Body() {
    return (
        <div className="app_body">
            <Sidebar/>
            <Feed/>
        </div>
    )
}

export default Body
