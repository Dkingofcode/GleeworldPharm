import React from 'react';
import Header from '../Components/header';
import Sidebar from '../Components/Sidebar';
import CashFlowicon from "../assets/images/Cashflow.svg";
import revenue from '../assets/images/newRevenue.svg';
import DownArrow from '../assets/images/newArrowDown.svg';
import UpArrow from '../assets/images/newArrowUp.svg';
import NairaIcon from "../assets/images/naira.png";
import Consumers from '../assets/images/Users.svg';
import User from '../assets/images/User.svg';
import AgentIcon from '../assets/images/Bank.svg';
import pharmacyIcon from '../assets/images/Pharmarcystore.svg';
import './module.dashboard.css';
import SearchIcon from '../assets/icons/Search.svg';
import CashComponent from '../Components/DashboardComponent/CashComponent';
import StakeholderComponent from '../Components/DashboardComponent/StakeholderComponent';

const Dashboard = () => {
   
    const handleFilter = () => { 

  }

  return (
    <div>
       <Header  />

       <section className='categories'>
      <div className="cash">
      <CashComponent
      topText="Total Cash Flow"
      bottomText="200,000"
      icon={NairaIcon}
      cashImage={CashFlowicon}
      />
       <CashComponent
         topText="Total Revenue"
         bottomText="23"
        
         cashImage={revenue}
       />
       <CashComponent
       topText="Total Cash Inflow"
       bottomText="1002"
      
       cashImage={DownArrow}
       />
       <CashComponent
       topText="Total Cash Outflow"
       bottomText="32"
      
       cashImage={UpArrow}
       />
      </div>

     <div className="stakeholder">
     <StakeholderComponent
      color="#FDF6ED"
      topText="4200"
      bottomText="Users"
      
      image={Consumers}
      />
    <StakeholderComponent
      color="#D6D6F6"
      topText="23"
      bottomText="Consumers"
      
      image={User}
      />
       <StakeholderComponent
      color="#E5F8ED"
      topText="1002"
      bottomText="Agents"
      image={AgentIcon}
      />
       <StakeholderComponent
      color="#FCEAEA"
      topText="32"
      bottomText="Pharmacies"
      
      image={pharmacyIcon}
      />
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
