import React from "react";
import { useNavigate } from "react-router-dom";
import IntelligentAssistant from "./components/ui/AssistantComponent";
import bloodTestResult from "../../exampleData/results.json";
import { getReadableTextsBasedOnBloodResult } from "./utils/getReadableIntelligentAssystantTexts";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log("działa?");
    navigate("/login");
  };

  const readableBloodTestResult =
    getReadableTextsBasedOnBloodResult(bloodTestResult);

  return (
    <div className="home">
      <IntelligentAssistant bloodTestResult={readableBloodTestResult} />
    </div>
  );
};

export default Home;
