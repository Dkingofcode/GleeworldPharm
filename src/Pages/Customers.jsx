//import React from 'react';
import Header from '../Components/header';
//import Sidebar from '../Components/Sidebar';
import './module.customers.css';
import { useState } from 'react';
import SearchIcon from '../assets/icons/Search.svg';
import Filter from '../assets/images/Filter.svg';
import Delete from '../assets/images/Delete.svg';
import Circle from '../assets/images/Circle.svg';


const Customers = () => {

  const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handleCustomers = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }

    const [customers, setCustomers] = useState();
   
   if(customers){
    setCustomers(handleCustomers);
   }



  return (
    <div>
        <Header  />
      <h1 className='header'>Customers</h1>
      <div className='Stats'>
       <p>All(2032)</p> 
       <p>Verified(202)</p> 
       <p>Pending(1602)</p> 
       <p>Reacted(228)</p> 
      </div>

      <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Customer...' />
      </div>
         
        
    
       <div className='tableButtons'>
        <div className='filterbtn'>
         <p>Filter</p>
         <img src={Filter} alt='' />
        </div> 

        <div className='deletebtn'>
          <img src={Delete} alt='' />  
          <p>Delete</p>  
        </div>
        </div>
        </div>
        

        <div className='tableList' style={{ display: "flex", flexDirection: "row", gap: "3rem" }}>
            <div style={{  display: "flex", flexDirection: 'column', rowGap: "24px"}}>
            <img src={Circle} alt="circle" />
            <img src={Circle} alt="circle" /> 
            <img src={Circle} alt="circle" />
            <img src={Circle} alt="circle" />
            <img src={Circle} alt="circle" />
            <img src={Circle} alt="circle" />  
            <img src={Circle} alt="circle" />

            </div>


            <div style={{  display: "flex", flexDirection: 'column', alignItems: "center",  }}>
            <h4 style={{  fontSize: "14px"}}>CUSTOMER NAME</h4>
            <h5>Mr Yinka Awoyele</h5>
            <h5>Mr Yinka Awoyele</h5>
            <h5>Mr Yinka Awoyele</h5> 
            <h5>Mr Yinka Awoyele</h5>   
            <h5>Mr Yinka Awoyele</h5>  
            <h5>Mr Yinka Awoyele</h5>
           
            </div>

            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
            <h4 style={{ fontSize: "14px"}}>VERIFICATION</h4>
            <h5>Approved</h5>
            <h5>Approved</h5>
            <h5>Approved</h5>
            <h5>Rejected</h5>
            <h5>Approved</h5>
            <h5>Approved</h5>
           
            </div>

            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
            <h4 style={{ fontSize: "14px"}}>ADDRESS</h4> 
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            
            </div>


            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
            <h4 style={{ fontSize: "14px"}}>EMAIL</h4>
            <h5>gleeworld247@gmail.com</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>gleeworld247@gmail.com</h5>            
            
            </div>
            
            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
            <h4 style={{ fontSize: "14px"}}>STATUS</h4>
            <h5>btn</h5>
            <h5>btn</h5> 
            <h5>btn</h5>
            <h5>btn</h5>
            <h5>btn</h5>  
            <h5>btn</h5>           
          
            </div>

            <div style={{ display: "flex", flexDirection: 'column', alignItems: "center", }}>
            <h4 style={{ fontSize: "14px"}}>ACTION</h4>           
            <h5>...</h5>
            <h5>...</h5>
            <h5>...</h5>
            <h5>...</h5>
            <h5>...</h5>
            <h5>...</h5>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Customers;
