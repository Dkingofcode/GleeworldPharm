//import React from 'react';
import Header from '../Components/header';
//import Sidebar from '../Components/Sidebar';
import './module.reviews.css';
import SearchIcon from '../assets/icons/Search.svg';
import ReviewImg from '../assets/images/reviewimg.svg';
import Panadol from '../assets/images/Panadol.svg';

const Reviews = () => {
  const url = 'staging.medfinder.com.ng/api/v1/admin';

  const handleReviews = () => {
     const data =  fetch(url)
     .then((res) => console.log(res))
     .catch(err => console.log(err))      
     
     return data;
    }

  
  return (
    <div>
        <Header  />
       <div className='Heading'>
       <h1>Reviews</h1>
       <p>Discover what our clients have to say about their experiences with our services</p>   
       </div> 
      
       <div className='table'>
        <div className='tableheader'>
        <div className='searchtable'>
       <img src={SearchIcon} alt="Search"  />
        <input placeholder='Search Reviews...' />
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
      
       <div className='reviews'>
        <article>
          <header>
            <img src={ReviewImg} alt="" />
             <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
            </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>

        <article>
          <header>
            <img src={ReviewImg} alt="" />
             <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
            </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>


        <article>
          <header>
            <img src={ReviewImg} alt="" />
             <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
             </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>

        <article>
          <header>
            <img src={ReviewImg} alt="" />
            <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
            </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>

        <article>
          <header>
            <img src={ReviewImg} alt="" />
            <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
            </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>

        <article>
          <header>
            <img src={ReviewImg} alt="" />
            <div>
            <h5>Papa Yankee</h5>
            <p>Joined 2020</p>  
            </div>
          </header>

          <main>
           <div>
            <img src={Panadol} alt="" />
            <div>
              <h5>Panadol pain & fever</h5>
              <p><img src=""  /> 4.9</p>
              <p>Created 2020</p>  
            </div>
           </div>
            <p>"Panadol is my go-to choice for swift pain and fever relief.
             Its reliable effectiveness and easy-to-use format makes it a staple in 
             my medicine cabinet." 
            </p>
          </main>  
        </article>
      </div>
       </div>

    </div>
  )
}

export default Reviews;
