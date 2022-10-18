import React from 'react';
import  HeaderIcons  from './HeaderIcons';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import SearchIcon from '@mui/icons-material/Search';
import './styles.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 


export const Header = () => {
  return (
   <header className="header">
       <nav className="nav">

       <LinkedInIcon className="logo"/>

        <div className="header__buscar">
            <SearchIcon/>
        <input type="text" placeholder="buscar"/>
        </div>

        <div className='headericons'>

       <Link to="/SystemRots"><HomeIcon Icon={HomeIcon} title="Home"/></Link>
       <ChatIcon Icon={ChatIcon} title="Home"/>
       <BusinessCenterIcon Icon={BusinessCenterIcon} title="Home"/>
       <SupervisorAccountIcon Icon={SupervisorAccountIcon} title="Home"/>
       <NotificationsIcon Icon={NotificationsIcon} title="Home"/>
       <AppsIcon Icon={AppsIcon} title="Home"/>
       </div>

       </nav>
   </header>
  )
}

export default Header
 