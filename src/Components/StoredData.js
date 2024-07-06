import React, { useContext,useEffect } from 'react';
import { FormContext } from '../Context/FormContext';
import { useNavigate } from 'react-router-dom';

function StoredData() {
  const { formData ,setFormData} = useContext(FormContext);
  const navigate = useNavigate()
  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, [setFormData]);


   
    const handleSubmit = (event) => {
      console.log(formData)
      event.preventDefault()
      localStorage.setItem('formData',JSON.stringify(formData))
      navigate('/stepc/last')
      
     
    };
   
  
  
  
    
    
  

  return (
    <div className='bg-transparent rounded-lg shadow-md backdrop-blur-md border border-white max-w-xl mx-auto p-6 m-8'>
      <h2 className='underline text-black text-4xl text-center py-6'>Confirmation</h2>
      <div className='form_wrapper'>


      <div className='flex justify-between items-center w-full h-12 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>Fullname:</label>
  <span className='text-green-600'>{formData.fullname}</span>
</div>
<div className='flex justify-between items-center w-full h-12 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>Email:</label>
  <span className='text-green-600'>{formData.email}</span>
</div>
<div className='flex justify-between items-center w-full h-20 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>Address Line 1:</label>
  <span className='text-green-600'>{formData.AddressLine1}</span>
</div>
<div className='flex justify-between items-center w-full h-20 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>Address Line 2:</label>
  <span className='text-green-600'>{formData.AddressLine2}</span>
</div>
<div className='flex justify-between items-center w-full h-12 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>City:</label>
  <span className='text-green-600'>{formData.City}</span>
</div>
<div className='flex justify-between items-center w-full h-12 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>State:</label>
  <span className='text-green-600'>{formData.State}</span>
</div>
<div className='flex justify-between items-center w-full h-12 p-2 my-2 rounded-lg shadow-sm border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 bg-white'>
  <label className='text-black'>ZipCode:</label>
  <span className='text-green-600'>{formData.ZipCode}</span>
</div>

        <div className='button flex'>
          <button onClick={handleSubmit}  className='outline-none border-none py-2.5 px-6 bg-green-600 font-inherit text-base cursor-pointer rounded-md text-white'>
            OK
          </button>
        </div>



      </div>




    </div>
  );
}

export default StoredData;
