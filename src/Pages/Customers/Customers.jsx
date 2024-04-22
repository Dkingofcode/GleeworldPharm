import React, { useEffect, useState } from 'react';
import Header from '../../Components/header';
import Sidebar from '../../Components/Sidebar';
import './module.customers.css';

import { useLocation } from 'react-router-dom';
import TableComponent from '../../Components/CommonTableComponent/TableComponent';
import { CustomerData } from '../TableData';

const Customers = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = 'staging.medfinder.com.ng/api/v1/admin';
  const customerUrl = `${url}/users?page=1&verified=true&limit=10`
 
  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await fetch(customerUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data.data); // Assuming the users data is in the `data` property of the response
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error.message);
        setLoading(false);
       // Return an empty array in case of error
      }
    };
    
    // Call the fetchUsers function and use the returned data
    fetchUsersData(); // Log the fetched users data
        // Do something with the fetched users data, e.g., display it on the UI
      }, []);
    

  

  return (
    <div>
        <Header  />
        <div className="customer-header">
        <h1 className=''>Customers</h1>
      <div className='Stats'>
       <p>All (2032)</p> 
       <p>Verified (202)</p> 
       <p>Pending (1602)</p> 
       <p>Reacted (228)</p> 
      </div>

        </div>
    

        {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user._id}>
              <p>Name: {user.first_name} {user.last_name}</p>
              <p>Contact: {user.telephone}</p>
              <p>Email: {user.email}</p>
              {/* Display other relevant information */}
            </div>
          ))}
        </div>
      )}


        <TableComponent pathname={pathname} placeholder="Search Customers ..." Data={CustomerData}
        viewlink={true}
        viewPath={"/customers/viewcustomer"}
        />



    </div>
  )
}

export default Customers;
