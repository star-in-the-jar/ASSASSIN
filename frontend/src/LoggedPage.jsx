import data from '../../exampleData/name.json';
import React from 'react';
import './LoggedPage.css';
import gospodarkaHormonalnaImage from './assets/gospodarkahormonalna.png';
import image from './assets/image.png';
import Button from './components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';

const LoggedPage = () => {
  const name = data.name;
  const surname = data.surname;
    const navigate = useNavigate();
    const handleButtonClick = () => {
        console.log("działa?");
        navigate('/login');
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
            <p className='logg'>Zalogowano jako: </p> <p className='logg-name'> {name} {surname}</p>
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

export default LoggedPage;
