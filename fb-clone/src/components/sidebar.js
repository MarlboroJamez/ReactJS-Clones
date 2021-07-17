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
        <SidebarRow src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F1%2F18%2FMark_Zuckerberg_F8_2019_Keynote_%252832830578717%2529_%2528cropped%2529.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMark_Zuckerberg&tbnid=KYqOT0gUhM5qHM&vet=12ahUKEwiVztbUnenxAhUI3hoKHa3BC1EQMygAegUIARDIAQ..i&docid=Nuoe_9cYuEZGSM&w=2226&h=2767&q=mark%20zuckerberg&client=opera-gx&ved=2ahUKEwiVztbUnenxAhUI3hoKHa3BC1EQMygAegUIARDIAQ' title='James Williams'/>   
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
