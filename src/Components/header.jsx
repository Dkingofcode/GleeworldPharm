import React from 'react';
import SearchIcon from '../assets/icons/Search.svg';
import BellIcon from '../assets/images/Bell.svg';
import BoxIcon from '../assets/images/Messages.svg';
import UserIcon from '../assets/images/Selfie.svg';
import "./module.header.css";
import Search from './SearchComponent/Search';

const Header = () => {
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

      <div className='Profile'>
        <img src={UserIcon} alt="Profile" />
      </div>
    </div>


    </div>
  )
}

export default Header;
