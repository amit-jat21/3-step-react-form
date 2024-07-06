import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../Context/FormContext';

function StepA() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(FormContext);
  const [localFormData, setLocalFormData] = useState({
    email: formData.email || '',
    password: formData.password || ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(localFormData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true); // Set loading to true when submitting the form

      // Simulate a delay for demonstration purposes
      setTimeout(() => {
        // Retrieve stored credentials from local storage
        const storedFormData = JSON.parse(localStorage.getItem('formData'));
        if (storedFormData) {
          const { email: storedEmail, password: storedPassword } = storedFormData;

          // Compare stored credentials with user-entered credentials
          if (storedEmail === localFormData.email && storedPassword === localFormData.password) {
            setFormData({ ...formData, ...localFormData });
            navigate('/stepb');
          } else {
            setErrors({ ...errors, auth: 'Email or password does not match' });
          }
        } else {
          setErrors({ ...errors, auth: 'No credentials stored in local storage' });
        }
        setLoading(false); // Set loading to false after processing
      }, 2000);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email) {
      errors.email = "Email address is required";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Please enter a valid email";
    }

    const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!data.password) {
      errors.password = "Password is required";
    } else if (!passwordRegex.test(data.password)) {
      errors.password = "Length of password should be 8 characters including a special character";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

  return (
    <div className='bg-transparent rounded-lg shadow-md backdrop-blur-md border border-white max-w-lg mx-auto p-6'>
      <h2 className='underline text-black text-4xl text-center py-6'>Login Details</h2>
      <div className='form_wrapper'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='form_control'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              onChange={handleChange}
              value={localFormData.email}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.email && <span className='text-red-500'>{errors.email}</span>}
          </div>

          <div className='form_control'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              onChange={handleChange}
              value={localFormData.password}
              className='w-full p-2.5 mb-2 rounded-md font-inherit text-base outline-none border-none border-b border-gray-300'
            />
            {errors.password && <span className='text-red-500'>{errors.password}</span>}
          </div>

          {errors.auth && <div className='text-red-500'>{errors.auth}</div>}

          <div className='btn'>
            {loading ? (
              <button type="button" className="bg-indigo-500 py-2.5 px-6 rounded-md text-white flex items-center" disabled>
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                </svg>
                Processing...
              </button>
            ) : (
              <button type='submit' className='outline-none border-none py-2.5 px-6 bg-green-600 font-inherit text-base mt-4 block mx-auto cursor-pointer rounded-md text-white'>
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default StepA;
