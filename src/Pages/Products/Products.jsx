import React from 'react';
import Header from '../../Components/header';
import { ProductsData } from '../TableData';
import './module.products.css';
import { useLocation } from 'react-router-dom';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import BoxAndIcon from '../../Components/BoxAndIconComponent/BoxAndIcon';
import plusIcon from '../../assets/images/plusIcon.svg';
const Products = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  const handleFilter = () => {

  }
    return (
    <div>
        <Header  />
    
       
       <div className="product-header">
<div className="product-mainText">
   
<h1>Products</h1>
      <div className='Stats'>
       <p>All(2032)</p> 
       <p>Verified(202)</p> 
       <p>Pending(1602)</p> 
       <p>Reacted(228)</p> 
      </div> 
   
</div>

<BoxAndIcon
 
 text="Add Product"
border=".5px solid #000040"
className="filter-box"
bgColor="#000040"
flexDirection="row-reverse"
icon={plusIcon}
color="white"
/>
       </div>
       
       
      
<TableComponent
 pathname={pathname}
 topleftText="All"
 placeholder="Search Products ..."
 showlast={true}
 withImage ={true}
 Data={ProductsData}
 />



    </div>
  )
}

export default Products;
