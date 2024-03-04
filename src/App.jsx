import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Components/Sidebar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './Pages/Products';
import Inventory from './Pages/Inventory';
import './App.css'
import Dashboard from './Pages/Dashboard';
import Customers from './Pages/Customers';
import Pharmacies from './Pages/Pharmacies';
import Reviews from './Pages/Reviews';
import Purchase from './Pages/Purchase';
import Settings from './Pages/Settings';
import Admins from './Pages/Admins';

function App() {
  

  return (
    <>
       
        <Router>    
        <div style={{ display: 'grid', gridTemplateColumns: "250px 1fr", overflow: "hidden" }}>  
         <Sidebar  />
        <div className='page' style={{ padding: "15px 5px", maxHeight: "calc(100vh - 30px)"  }}>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pharmacies' element={<Pharmacies />} />
          <Route path='/inventory' element={<Inventory />} />
          <Route path='/products' element={<Products />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/admins' element={<Admins />} />
          <Route path='/settings' element={<Settings  />} />
        </Routes>
        </div>      
         </div>     
        </Router>
    </>
  )
}

export default App;
