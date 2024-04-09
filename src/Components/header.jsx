import React from 'react';
import ProfileIcon from "../assets/icons/User.svg";
import SearchIcon from '../assets/icons/Search.svg';
import BellIcon from '../assets/images/Bell.svg';
import BoxIcon from '../assets/images/Messages.svg';
import UserIcon from '../assets/images/Selfie.svg';
import SettingsIcon from "../assets/icons/Settings-2.svg";
import { useLocation } from "react-router-dom";
import "./module.header.css";
import Search from './SearchComponent/Search';

import { useState } from 'react';

const Header = () => {
  const [state, setState] = useState("");
  const location = useLocation();

  const handleClick = () => {
    console.log("Clicked");
     setState(state === 'close' ? "" : "close");

  }

  const handleProfile = () => {
    location("/profile");
  }

  const handleSettings = () => {
    location("/settings")
  }

  const handlelogout = () => {
    location("/login")
  }


  return (
    <div className='HeaderBox'>
      
      {/* <div className='search'>
       <img src={SearchIcon} alt="Search"  />
      <input placeholder='Search ...' />
      </div> */}
      <Search text="Search..." 
      marginLeft="30px"
      />

      <div className='icons'>
      <div className='message'>
         <span>2</span>
        <img src={BoxIcon} alt='Message' />
      </div>

      <div className='BellIcon'>
        <span>2</span>
        <img src={BellIcon} alt='Notification' />
      </div>

      <div onClick={handleClick} className='Profile'>
        <img src={UserIcon} alt="Profile" />
      </div>
      
      <ul className={`User__dropdown ${state}`}>
      <a href='/profile'><img src={ProfileIcon}  alt='profile icon' />  My Profile</a>
         <a href='/settings'><img src={SettingsIcon} alt='Settings icon' />Settings</a>
         <a href='/login'><img src={ProfileIcon} alt='logout button'  />Logout</a>
      </ul>
    </div>


    </div>
  )
}

export default Header;
