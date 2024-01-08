import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import UiInput from './components/ui/UiInput';
import './LoginUser.css'; 
import { Link } from 'react-router-dom';

const Login_User = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonClick = () => {
    console.log("działa?");
    navigate('/login');
  };

  return (
      <div className="login_view">
        <Link to="#" onClick={() => window.history.goBack()}>
          <h4>&lt;powrót</h4>
        </Link>
        <h1>Logowanie</h1>
        <UiInput
         label="login pacjenta"
         placeholder=""
         inputValue={username}
         onChange={setUsername}
       />
       <br></br>
       <br></br>
       <br></br>
       <UiInput
         label="haslo"
         placeholder=""
         inputValue={password}
         onChange={setPassword}
       />
       <br></br>
       <br></br>
       <br></br>
       <Button variant="blue" label="Zaloguj się" onClick={handleButtonClick} />
        <h5>Zaloguj się jako szpital</h5>
      </div>
  );
};

export default Login_User;