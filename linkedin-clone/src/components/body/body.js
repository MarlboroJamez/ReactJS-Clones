import React from 'react';
import '../../styles/body.css';
import Sidebar from './templates/sidebar';
import Feed from './templates/feed';
import Widgets from './templates/widgets';

function Body() {
    return (
        <div className="app_body">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default Body
