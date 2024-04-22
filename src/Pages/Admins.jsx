//import React from 'react';
import Header from '../Components/header';
//import Sidebar from '../Components/Sidebar';
import './module.admin.css';
import { useState } from 'react';
import SearchIcon from '../assets/icons/Search.svg';
import Circle from '../assets/images/Circle.svg';
import Filter from '../assets/images/Filter.svg';
import Delete from '../assets/images/Delete.svg';

const Admins = () => {
  const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handleAdmin = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }

    const [admins, setAdmins] = useState();
   
    if(admins){
     setAdmins(handleAdmin)
    }



  return (
    <div className='Admin'>
        <Header  />
      <div className='header'>
       <div>
      <h1>Admins</h1>
      <p>Manage Admins added to manage your platform</p>
       </div>

       <button>
        <span className='addBtn'>&#43;</span> Add Admin
       </button>
       </div>


      <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Products...' />
      </div>
         
        
    
       <div className='tableButtons'>
        <div className='filter'>
         <p>Filter</p>
         <img src={Filter} alt='filter' />
        </div> 

        <div className='delete'>
          <img src={Delete} alt="delete" />  
          <p>Delete</p>  
        </div>
        </div>
        </div>
        

        <div className='tableList'>
            <div>
            <img src={Circle} alt="circle" />
            <h5>ADMIN NAME</h5>
            <h5>DATE ADDED</h5>
            <h5>EMAIL</h5>
            <h5>LAST LOGIN</h5>
            <h5>STATUS</h5>
            <h5>ACTION</h5>
            </div>

            <div>
            <img src={Circle} alt="circle" />
            
            
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src={Circle} alt="circle" />
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src={Circle} alt='circle' />
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>


            <div>
            <img src={Circle} alt='circle' />
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>
            
            <div>
            <img src={Circle} alt='circle' />
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

            <div>
            <img src={Circle} alt='circle' />
            <h5> New Admin XYZ</h5>
            <h5>Dec 24, 2023</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>Dec 11, 8:24AM</h5>
            <h5>btn</h5>
            <h5>...</h5>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Admins;
