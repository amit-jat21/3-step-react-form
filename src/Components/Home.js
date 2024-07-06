import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../Context/FormContext';

function Home() {
  const navigate = useNavigate();
  
 
  

 

 
  return (

    <div className='bg-transparent rounded-lg shadow-md backdrop-blur-md border border-white max-w-lg mx-auto p-6'>
      <h2 className='underline text-black text-4xl text-center py-6'>Home </h2>
      <div className='form_wrapper'>  
      <div className='btn'>
            <button type='submit' onClick={()=>navigate('/login')} className='outline-none border-none py-2.5 px-6 bg-green-600 font-inherit text-base mt-4 block mx-auto cursor-pointer rounded-md text-white'>
              Login 
            </button>
            <button  onClick={()=>navigate('/signin')} type='submit' className='outline-none border-none py-2.5 px-6 bg-green-600 font-inherit text-base mt-4 block mx-auto cursor-pointer rounded-md text-white'>
              Sign IN
            </button>
          </div>



          </div>        
      </div>
  
  );
}

export default Home;
