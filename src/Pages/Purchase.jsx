//import React from 'react';
import Header from '../Components/header';
//import Sidebar from '../Components/Sidebar';
import './module.purchase.css';
import SearchIcon from '../assets/icons/Search.svg';


const Purchase = () => {
  const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handlePurchase = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }

  
  
  
  return (
    <div>
        <Header  />
      <h1>Purchase</h1>
      <p>Manage purchases made on your platform</p>
    
      <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Purchase...' />
      </div>
         
        
    
       <div className='tableButtons'>
        <div className='filterbtn'>
         <p>Filter</p>
         <img  src="" />
        </div>

        <div className=''>
          <p>Download</p>
          <img src="" />
         </div> 

        <div className='deletebtn'>
          <img src="" />  
          <p>Delete</p>  
        </div>
        </div>
        </div>
        

        <div className='tableList'>
            <div>
            <img src="" alt="" />
            <h5>PRODUCT NAME</h5>
            <h5>PRICE</h5>
            <h5>CATEGORY</h5>
            <h5>BRAND NAME</h5>
            <h5>QUANTITY</h5>
            <h5>SUPPLIER NAME</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5><img src="" /> Panadol pain & fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5><img src="" />Panadol pain & fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5><img  src=""  />Panadol pain & fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5><img src=""  />Panadol pain & fever</h5>
            <h5>Rejected</h5>
            <h5>44, Gleeworld street,<br /> Lagos, Nigeria</h5>
            <h5>gleeworld247@gmail.com</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>
            
            <div>
            <img src="" alt="" />
            <h5><img src="" />Panadol pain & fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>

            <div>
            <img src="" alt="" />
            <h5><img  src=""  /> Panadol pain & fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>
        </div>
        </div>
    
    
    </div>

  )
}

export default Purchase;
