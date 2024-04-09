

import React from 'react';
//import route from './route';
import {Link} from "react-router-dom";
import AdminLogo from '../assets/images/Logo.svg'; 
import './module.sidebar.css';

import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { General,Accounts } from './ComponentsData';
const Sidebar = () => {

  const {pathname} = useLocation();
  const [active ,setActive] = useState("");



   
  

  useEffect(() => {

    setActive(pathname)

  }, [pathname])
  
console.log(active)
    return (
    <div className="main">
      <div className="Applogo">
        <img width={40} height={40} src={AdminLogo} alt="logo" />
      </div>

      <div className='links'>

        <div className="general">
        <h6>GENERAL</h6>


<ul>
  {General.map((item) => (
    <li key={item.url}>
      <Link to={item.url} className={active === item.url ? "selected" : "select"}>
        <img src={item.img} alt={item.text} />
        <h4>{item.text}</h4>
      </Link>
    </li>
  ))}
</ul>

        </div>


        
   <div className="account">
   <h6>ACCOUNT</h6>



<ul>

  {Accounts.map((item) => (
    <li key={item.url}>
      <Link to={item.url} className={active === item.url ? "selected" : "select"}>
        <img src={item.img} alt={item.text} />
        <h4>{item.text}</h4>
      </Link>
    </li>
  ))}
</ul>
   </div>
     

      </div>

    </div>
  )
}

export default Sidebar;













