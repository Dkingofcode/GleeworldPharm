

import React from 'react';
//import route from './route';
import {Link} from "react-router-dom";
import AdminLogo from '../assets/images/Logo.svg'; 
import './module.sidebar.css';
import DashboardIcon from '../assets/images/dashboard.svg'
import PharmacyIcon from '../assets/images/pharmacy.svg';
import ProductIcon from '../assets/images/Products.svg';
import InventoryIcon from '../assets/images/Inventory.svg';
import CustomerIcon from '../assets/images/User.svg';
import ReviewsIcon from '../assets/images/Star.svg';
import PurchaseIcon from '../assets/images/creditcard.svg'
import Admins from '../assets/images/Admins.svg';
import SettingsIcon from '../assets/images/Settingsicon.svg';
import Helpicon from '../assets/images/Helpicon.svg';
const Sidebar = () => {



    return (
    <div className="main">
      <div className="Applogo">
        <img width={40} height={40} src={AdminLogo} alt="logo" />
      </div>

      <div className='links'>

        <div className="general">
        <h6>GENERAL</h6>

        
<Link  to="/dashboard" className='select'>
 <img src={DashboardIcon} alt="dashboard" />
  <h4>Dashboard</h4> 
</Link>


<Link to="/pharmacies"  className='select'>
 <img src={PharmacyIcon} alt="pharmacy" />
  <h4>Pharmacies</h4> 
</Link>


<Link to="/products"  className='select'>
 <img src={ProductIcon} alt="products" />
  <h4>Products</h4> 
</Link>


<Link to="/inventory"  className='select'>
 <img src={InventoryIcon} alt="inventory" />
  <h4>Inventory</h4> 
</Link>


<Link to="/customers"  className='select'>
 <img src={CustomerIcon} alt="customers" />
  <h4>Customers</h4> 
</Link>


<Link to="/reviews"  className='select'>
 <img src={ReviewsIcon} alt="reviews" />
  <h4>Reviews</h4> 
</Link>


<Link to="/purchase"  className='select'>
 <img src={PurchaseIcon} alt="purchase" />
  <h4>Purchase</h4> 
</Link>


<Link to="/admins"  className='select'>
 <img src={Admins} alt="admins" />
  <h4>Admins</h4> 
</Link>

        </div>


        
   <div className="account">
   <h6>ACCOUNT</h6>

       
<Link to="/settings"  className='select'>
 <img src={SettingsIcon} alt="settings" />
  <h4>Settings</h4> 
</Link>


<Link to="/help"  className='select'>
 <img src={Helpicon} alt="help" />
  <h4>Help</h4> 
</Link>
   </div>
     

      </div>

    </div>
  )
}

export default Sidebar;













