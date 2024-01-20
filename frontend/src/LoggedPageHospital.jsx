import data from '../../exampleData/hospitalname.json';
import React from 'react';
import './LoggedPageHospital.css';
import gospodarkaHormonalnaImage from './assets/gospodarkahormonalna.png';
import image from './assets/image.png';
import Button from './components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';

const LoggedPageHospital = () => {
  const hospitalname = data.name;
  console.log(data.name);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        console.log("działa?");
      };
      const handleButtonClick2 = () => {
        console.log("działa?");
        navigate('/patient-results/download');
      };
  return (
    <div>
      
      <div className="menu">
      <img className="photo1" src={gospodarkaHormonalnaImage} alt="Gospodarka Hormonalna"></img>
      <h1>ALAB INTELLIGENT CLOUD</h1>
      </div>
      <div className="container">
        <div className="left"> 
            <div className="text">
            <p style={{ marginBottom: '16px' }}>
                Skorzystaj z naszego innowacyjnego systemu podglądu wyników swoich badań.
            </p>
            <p>
                Inteligentny Asystent pomoże Ci zinterpretować wyniki Twoich badań, 
                 w związku z czym nie musisz więcej samemu tłumaczyć niezrozumiałych sformułowań.
            </p>
            </div>
            <Button variant="blue" label="Dodaj wyniki badań" onClick={handleButtonClick2}>Button 1</Button>
            <p className='loggin'>Zalogowano jako: </p> <p className='loggin-name'> {hospitalname}</p>
        </div>
        
        <div className="right"> 
            <img className="image" src={image} alt="image"></img>
            <div className="topbutton"> 
                <Button   variant="blue" label="Przejdź do pobierania wyników" onClick={handleButtonClick2}>Button 1</Button>
            </div>
            <div className="lowbutton"> 
                <Button  variant="darkblue" label="Wyloguj" onClick={handleButtonClick}>Button 1</Button>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default LoggedPageHospital;
