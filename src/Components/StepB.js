import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../Context/FormContext';

function StepB() {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const [localFormData, setLocalFormData] = useState({
    AddressLine1: formData.AddressLine1 || '',
    AddressLine2: formData.AddressLine2 || '',
    City: formData.City || '',
    State: formData.State || '',
    ZipCode: formData.ZipCode || ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(localFormData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); 
      const updatedFormData = { ...formData, ...localFormData };
      setFormData(updatedFormData);
      localStorage.setItem('formData', JSON.stringify(updatedFormData));
      
      
      setTimeout(() => {
        setLoading(false);
        navigate('/stepc');
      }, 1000);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    
    if (!data.AddressLine1) {
      errors.AddressLine1 = "Address is required";
    } else if (data.AddressLine1.length < 3) {
      errors.AddressLine1 = "Address should be greater than 3 characters";
    }

    if (!data.AddressLine2) {
      errors.AddressLine2 = "Address is required";
    } else if (data.AddressLine2.length < 3) {
      errors.AddressLine2 = "Address should be greater than 3 characters";
    }

    if (!data.City) {
      errors.City = "City is required";
    } else if (data.City.length < 2) {
      errors.City = "City should be at least 2 characters";
    }

    if (!data.State) {
      errors.State = "State is required";
    } else if (data.State.length < 2) {
      errors.State = "State should be at least 2 characters";
    }

    const zipCodeRegex = /^\d{6}$/;
    if (!data.ZipCode) {
      errors.ZipCode = "ZipCode is required";
    } else if (!zipCodeRegex.test(data.ZipCode)) {
      errors.ZipCode = "ZipCode should be a 6-digit number";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  return (
    <div className='bg-transparent rounded-lg shadow-md backdrop-blur-md border border-white max-w-lg mx-auto p-6'>
      <h2 className='underline text-black text-4xl text-center py-6'>Address Information</h2>
      <div className='form_wrapper'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='form_control'>
            <input
              type='text'
              name='AddressLine1'
              placeholder='AddressLine-1'
              onChange={handleChange}
              value={localFormData.AddressLine1}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.AddressLine1 && <span className='text-red-500'>{errors.AddressLine1}</span>}
          </div>

          <div className='form_control'>
            <input
              type='text'
              name='AddressLine2'
              placeholder='AddressLine-2'
              onChange={handleChange}
              value={localFormData.AddressLine2}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.AddressLine2 && <span className='text-red-500'>{errors.AddressLine2}</span>}
          </div>

          <div className='form_control'>
            <input
              type='text'
              name='City'
              placeholder='City'
              onChange={handleChange}
              value={localFormData.City}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.City && <span className='text-red-500'>{errors.City}</span>}
          </div>

          <div className='form_control'>
            <input
              type='text'
              name='State'
              placeholder='State'
              onChange={handleChange}
              value={localFormData.State}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.State && <span className='text-red-500'>{errors.State}</span>}
          </div>

          <div className='form_control'>
            <input
              type='text'
              name='ZipCode'
              placeholder='ZipCode'
              onChange={handleChange}
              value={localFormData.ZipCode}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.ZipCode && <span className='text-red-500'>{errors.ZipCode}</span>}
          </div>

          <div className='btn flex justify-between mt-4'>
            <button type='button' onClick={() => navigate('/')} className='outline-none border-none py-2.5 px-6 bg-gray-600 font-inherit text-base cursor-pointer rounded-md text-white'>
              Back
            </button>
            {loading ? (
              <button type="button" className="bg-indigo-500 py-2.5 px-6 rounded-md text-white flex items-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                </svg>
                Processing...
              </button>
            ) : (
              <button type='submit' className='outline-none border-none py-2.5 px-6 bg-green-600 font-inherit text-base cursor-pointer rounded-md text-white'>
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default StepB;
