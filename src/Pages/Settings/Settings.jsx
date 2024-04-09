//import React from 'react';
import Header from '../../Components/header';
//import Sidebar from '../../Components/Sidebar';
import './module.settings.css';


const Settings = () => {
  return (
    <div>
        <Header  />
      <section className='general'>

      <h1> General Settings </h1>
      <p>Manage general settings</p>
      
   <div className='form'>
      <div>
      <label>
        Admin Name
      </label>
      <input type='text' name='name'  />
       </div>
       
       <div>
      <label>
        Email
      </label>
      <input type='text' name='email'  />
       </div>
       
       <div>
      <label>
        Phone
      </label>
      <input type='text' name='number'  />
       </div>
    </div>

      <button>
        Save Changes
      </button>
   
      </section>
      
      <section className='security'>
        <h1>Security Settings</h1>
        <p>Manage your security</p>

    <div className='form'>
        <div>
      <label>
        Old Password
      </label>
      <input type='password' name='password'  />
       </div>
       
       <div>
      <label>
        New Password
      </label>
      <input type='password' name='password'  />
       </div>
       
       <div>
      <label>
        Confirm New Password
      </label>
      <input type='password' name='password'  />
       </div>
    </div>

      <button>
        Reset Password
      </button>

      </section>

       <section className='account'>
         <h1>Account Settings</h1>
         <p>Manage your account</p>

          
         <div className='setting'>
            Clear search history
         </div>

         <div className='setting'>
            Clear notification history
         </div>
         
         <div className='setting'>
            Clear notification history
         </div>
         
       </section>

    </div>


  )
}

export default Settings;
