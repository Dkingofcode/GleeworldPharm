//import React from 'react';
import Header from '../Components/header';
//import Sidebar from '../Components/Sidebar';
import CashFlowicon from "../assets/images/Cashflow.svg";
import RevenueIcon from '../assets/images/Bicash.svg';
import DownArrow from '../assets/images/Arrowdown.svg';
import UpArrow from '../assets/images/ArrowUp.svg';
import Users from '../assets/images/Users.svg';
import User from '../assets/images/User.svg';
import AgentIcon from '../assets/images/Bank.svg';
import pharmacyIcon from '../assets/images/Pharmarcystore.svg';
import './module.dashboard.css';
import SearchIcon from '../assets/icons/Search.svg';
import { useState } from 'react';



const Dashboard = () => {
  
  const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handleDashboard = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }

    const [dashboard, setDashboard] = useState();
   
   if(dashboard){
    setDashboard(handleDashboard);
   }

  const handleFilter = () => { 

  }



  return (
    <div>
       <Header  />

       <section className='categories'>
        <div className='Cash'>
       <article>
        <div>
        <img src={CashFlowicon} className='cashflow' alt="CashFlow" />
        </div>

        <div>
         <p>Total Cash Flow</p>
         <h4>N200,000</h4>   
        </div>
        </article> 

        <article>
        <div>
        <img src={RevenueIcon} className='revenue' alt="Revenue" />
        </div>

        <div>
         <p>Total Revenue</p>
         <h4>23</h4>   
        </div>
        </article>

         <article>
        <div>
        <img src={DownArrow} className='inflow' alt="downarrow" />
        </div>

        <div>
         <p>Total Cash Inflow</p>
         <h4>1002</h4>   
        </div>
        </article>

         <article>
        <div>
        <img src={UpArrow} className='outflow' alt="uparrow" />
        </div>

        <div>
         <p>Total Cash OutFlow</p>
         <h4>32</h4>   
        </div>
        </article>   
        </div>

        <div className='stakeholders'>
         <article className='users'>
           <div>
            <h4>4200</h4>
            <p>Users</p>
            </div> 

            <div>
              <img src={Users} alt="users" />  
            </div>
         </article>
         

         <article className='customers'>
           <div>
            <h4>23</h4>
            <p>Consumers</p>
            </div> 

            <div>
              <img src={User} alt="user" />  
            </div>
         </article>

         <article className='agents'>
           <div>
            <h4>1002</h4>
            <p>Agents</p>
            </div> 

            <div>
              <img src={AgentIcon} alt="agent" />  
            </div>
         </article>

         <article className='pharmacy'>
           <div>
            <h4>32</h4>
            <p>Pharmacies</p>
            </div> 

            <div>
              <img src={pharmacyIcon} alt="pharmacy" />  
            </div>
         </article>
        </div>
       </section>



      <section className='productTable'>
        <div>
          <h4>Frquently Purchased</h4>

          <div className='filter' onClick={handleFilter}>
            <p>last 7 days</p>
          </div>
        </div>

        <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Products...' />
      </div>
         
        
    
       <div className='tableButtons'>
        <div>
         <p>Filter</p>
         <img  src="" />
        </div> 

        <div>
          <img src="" />  
          <p>Delete</p>  
        </div>
        </div>
        </div>
        

        <div className='tableList'>
            <div>
            <img  />
            <h5>PRODUCT NAME</h5>
            <h5>PRICE</h5>
            <h5>CATEGORY</h5>
            <h5>BRAND NAME</h5>
            <h5>QUANITY SOLD</h5>
            <h5>ACTION</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>...</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>...</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>...</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>...</h5>
            </div>
            
            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>...</h5>
            </div>

        </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;
