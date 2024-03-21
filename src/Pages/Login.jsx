//import React from 'react';
import './module.login.css';



const Login = () => {
   const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handleLogin = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }





  return (
    <div className='login'>
        <h1>Login to Admin</h1>
      <form action='/login'>
        <div>
            <img src='' alt=''  />
        </div>
         <label className='Emailtext'>Email</label>
         <input className='email' type='text' name='email' placeholder='Enter email' />

         <label className='Passwordtext'>Password</label>
         <input className='password' type='password' name='password' placeholder='Enter password' />
      
         <button onClick={handleLogin}>
            Login
         </button>
      </form>
    </div>
  )
}

export default Login;

















