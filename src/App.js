import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StepA from './Components/StepA';
import StepB from './Components/StepB';
import StepC from './Components/StepC';
import { FormProvider } from './Context/FormContext';
import './App.css';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Last from './Components/Last';
import StoredData from './Components/StoredData';
import SignIn from './Components/SignIn';

function App() {
  return (
    
    <FormProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/Login' element={<LogIn></LogIn>} ></Route>
          <Route path='/login/storedata' element={<StoredData/>}></Route>
          <Route path="/stepb" element={<StepB />} />
          <Route path="/stepc" element={<StepC />} />
          <Route path='/stepc/last' element={<Last></Last>} ></Route>
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
