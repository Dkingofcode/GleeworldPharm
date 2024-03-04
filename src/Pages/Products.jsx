import React from 'react';
import Header from '../Components/header';
import Sidebar from '../Components/Sidebar';
import SearchIcon from '../assets/icons/Search.svg';
import './module.products.css';

const Products = () => {
  
  const handleFilter = () => {

  }
    return (
    <div>
        <Header  />
        <div style={{ display: "flex", justifyContent: "space-between"}}>

         <div>   
        <h1>Products</h1>
      <div className='Stats'>
       <p>All(2032)</p> 
       <p>Verified(202)</p> 
       <p>Pending(1602)</p> 
       <p>Reacted(228)</p> 
      </div>
      </div>
       
        <button className='AddProduct'>
          <span className='addBtn'>&#43;</span> Add Product 
        </button>
        </div>

        <section className='productTable'>
        <div>
          <h4>All</h4>

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
            <h5>QUANITY</h5>
            <h5>CREATED</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Admin</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Alpha Pharmacy</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Gleeworld Pharmacy</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Gleeworld Pharmacy</h5>
            </div>
            
            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Gleeworld Pharmacy</h5>
            </div>

            <div>
            <img  />
            <h5><img src="" /> Panadol pain and fever</h5>
            <h5>N4,000.00</h5>
            <h5>Pain Relief</h5>
            <h5>Emzor</h5>
            <h5>23</h5>
            <h5>Gleeworld Pharmacy</h5>
            </div>

        </div>
        </div>
      </section>




    </div>
  )
}

export default Products;
