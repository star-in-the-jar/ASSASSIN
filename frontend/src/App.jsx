import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import LoginUser from './LoginUser';
import LoginHospital from './LoginHospital';
import UiInput from './components/ui/UiInput.jsx';
import LandingPage from './LandingPage';
import Test from './Test'
import PatientResults from './PatientResults.jsx';
import UserData from './UserData.jsx';


function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    console.log(value);
  };

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

  fetch('https://jsonplaceholder.typicode.com/users/2')
    .then(res => res.json())
    .then(j => console.log(j));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/input"
          element={
            <div>
              <UiInput
                label="input:"
                placeholder="Input"
                inputValue={inputValue}
                onChange={handleInputChange}
              />
            </div>
          }
        />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="login" element={<LoginUser />} />
        <Route path="login-hos" element={<LoginHospital />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/patient-results/download" element={<PatientResults />} />
        <Route path="/user-data" element={<UserData />} />
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
