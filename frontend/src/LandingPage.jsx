// LandingPage.jsx
import React from 'react';
import './LandingPage.css';
import gospodarkaHormonalnaImage from './assets/gospodarkahormonalna.png';
import profilaktykaImage from './assets/profilaktyka.png';
import Button from './components/ui/Button.jsx';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        console.log("działa?");
        navigate('/login');
      };
      const handleButtonClick2 = () => {
        console.log("działa?");
        navigate('/login-hos');
      };
  return (
    <div>
      
      <div className="landing-buttons-container">
      <Button variant="blue" label="Logowanie szpitala" onClick={handleButtonClick2}>Button 1</Button>
        <Button variant="blue" label="Logowanie pacjenta" onClick={handleButtonClick}>Button 2</Button>
      </div>
      <div className="landing-container">
        <h1>ALAB INTELLIGENT CLOUD</h1>
        <p>Tutaj odbierzesz swoje wyniki.</p><br></br>
        <p>Wypróbuj rewolucyjnego Inteligentnego Asystenta, który ułatwi Ci interpretację wyników badań w mgnieniu oka!</p>
        <img className="photo1" src={gospodarkaHormonalnaImage} alt="Gospodarka Hormonalna"></img>
        <img className="photo2" src={profilaktykaImage} alt="Profilaktyka"></img>
      </div>
    </div>
  );
};

export default LandingPage;
