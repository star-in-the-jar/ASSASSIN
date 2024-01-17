import React from "react";
import "./AssistantComponent.css";
import { getReadableTextsBasedOnBloodResult } from "../../utils/getReadableIntelligentAssystantTexts";
const IntelligentAssistant = ({ bloodTestResult }) => {
  console.log(bloodTestResult);

  const { odchylOdNormy, mozePowodowac } = getReadableTextsBasedOnBloodResult(
    bloodTestResult.blood_test_result
  );

  console.log(mozePowodowac);

  return (
    <div className="assistant-component-container">
      <div className="header-container">
        <h2>Intelligent Assistant</h2>
        <div className="result-container">
          <div className="left-result-container">
            <h3>Odchył od normy </h3>
            <ul>
              {odchylOdNormy.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>

          <div className="mid-result-container"></div>

          <div className="right-result-container">
            <h3>Może powodować </h3>
            <ul>
              {mozePowodowac.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntelligentAssistant;
