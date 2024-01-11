import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("działa?");
    navigate('/login');
  };

  return (
    <div className="home">
      <h2>Hello World</h2>
      <Button variant="darkblue" label="Default" onClick={handleButtonClick} />
    </div>
  );
};

export default Home;