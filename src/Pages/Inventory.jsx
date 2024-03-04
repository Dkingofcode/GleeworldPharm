import React from 'react';
import Header from '../Components/header';
import Sidebar from '../Components/Sidebar';
import SearchIcon from '../assets/icons/Search.svg';
import './module.inventory.css';


const Inventory = () => {
  return (
    <div>
        <Header  />
      <h1 className='texthead'>INVENTORY</h1>
      <p className='textsubhead'>Manage your inventory</p>


      <div className='Controls'>
      <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Inventory...' />
      </div>

      <button>
        Filter <img /> 
      </button>

      </div>

      <div className='InventoryList'>
        

        <article>
          <p>Total Products</p>
          <h4>10386238</h4>  
        </article>

        <article>
          <p>Antibiotics</p>
          <h4>23</h4>  
        </article>
         
        <article>
          <p>Antidepressants</p>
          <h4>1002</h4>  
        </article>

        <article>
          <p>Antifungal Medications</p>
          <h4>32</h4>  
        </article>

        <article>
          <p>Antihypertensive</p>
          <h4>31</h4>  
        </article>
         
        <article>
          <p>Antidiabetic</p>
          <h4>245</h4>  
        </article>
          
        <article>
          <p>Pain Relief</p>
          <h4>136</h4>  
        </article>

         <article>
          <p>Cough and Cold</p>
          <h4>979</h4>  
        </article>

        <article>
          <p>Allergy Relief</p>
          <h4>34</h4>  
        </article>

        <article>
          <p>Digestive Health</p>
          <h4>372</h4>  
        </article>
         
        <article>
          <p>Vitamins and Supplements</p>
          <h4>340</h4>  
        </article>

        <article>
          <p>First Aid</p>
          <h4>263</h4>  
        </article>
          
        <article>
          <p>Contraceptives</p>
          <h4>232</h4>  
        </article>

        <article>
          <p>Menstrual Health</p>
          <h4>218</h4>  
        </article>

         <article>
          <p>Glucose Meters</p>
          <h4>638</h4>  
        </article>
         
        <article>
          <p>Total Products</p>
          <h4>730</h4>  
        </article>

      </div>
    </div>
  )
}

export default Inventory;
