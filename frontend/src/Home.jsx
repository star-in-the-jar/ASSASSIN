import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import IntelligentAssistant from './components/ui/AssistantComponent';
import bloodTestResult from '../../exampleData/results.json';


const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("działa?");
    navigate('/login');
  };

  return (
    <div className="home">

      {/*<Button variant="blue" label="Default" onClick={handleButtonClick} />*/}
      <IntelligentAssistant bloodTestResult={bloodTestResult} />
    </div>
  );
};

export default Home;