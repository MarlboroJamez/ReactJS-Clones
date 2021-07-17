import React from 'react';
import '../css/sidebar.css';
import SidebarRow from '../components/sidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";

function sidebar() {
    return (
    <div className="sidebar">
        <SidebarRow src='https://i.insider.com/60c1df3823393a00188e25dc?width=700' title='James Williams'/>   
        <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/> 
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/> 
        <SidebarRow Icon={PeopleIcon} title="Friends"/> 
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/> 
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketpalce"/>      
    </div>
    )
    
}

export default sidebar
