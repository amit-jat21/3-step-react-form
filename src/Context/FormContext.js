// src/context/FormContext.js
import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    AddressLine1: "",
    AddressLine2: "",
    City: "",
    State: "",
    ZipCode: ""
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
