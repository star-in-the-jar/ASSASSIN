// LandingPage.jsx
import React from 'react';
import './App.css';
import gospodarkaHormonalnaImage from './assets/gospodarkahormonalna.png';
import profilaktykaImage from './assets/profilaktyka.png';

const LandingPage = () => {
  return (
    <div>
      
      <div className="landing-buttons-container">
        <button>Button 1</button>
        <button>Button 2</button>
      </div>
      <div className="landing-container">
        <h1>ARAB INTELLIGENT CLOUD</h1>
        <p>Tutaj odbierzesz swoje wyniki.</p><br></br>
        <p>Wypróbuj rewolucyjnego Inteligentnego Asystenta, który ułatwi Ci interpretację wyników badań w mgnieniu oka!</p>
        <img className="photo1" src={gospodarkaHormonalnaImage} alt="Gospodarka Hormonalna"></img>
        <img className="photo2" src={profilaktykaImage} alt="Profilaktyka"></img>
      </div>
    </div>
  );
};

export default LandingPage;
