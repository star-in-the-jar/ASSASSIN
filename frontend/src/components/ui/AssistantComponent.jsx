import React from 'react';
import './AssistantComponent.css';
const IntelligentAssistant = ({ bloodTestResult }) => {

  const odchylOdNormy = [];


  if (bloodTestResult) {
    const { RBC, WBC, HGBg, HCT } = bloodTestResult.blood_test_result;

    if (WBC > 140) {
      odchylOdNormy.push({ reason: 'Wysoki wskaźnik białych krwinek (WBC)', result: 'Wystąpienie białaczki' });
    } else if (WBC < 80) {
      odchylOdNormy.push({
        reason: 'Niski wskaźnik białych krwinek (WBC)',
        result: ['Niedokrwistosć', 'Przewodnienie']
      });
    }

    if (RBC > 5.5) {
      odchylOdNormy.push({
        reason: 'Wysoki wskaźnik czerwonych krwinek (RBC)',
        result: 'Podwyższone ryzyko zakrzepów krwi'
      });
    } else if (RBC < 4.0) {
      odchylOdNormy.push({
        reason: 'Niski wskaźnik czerwonych krwinek (RBC)',
        result:  ['Niedokrwistość', 'Zmniejszone dostarczanie tlenu do tkanek']
      });
    }

    if (HGBg > 17.2) {
      odchylOdNormy.push({
        reason: 'Wysoki poziom hemoglobiny (HGB)',
        result: 'Podwyższone ryzyko zakrzepów krwi'
      });
    } else if (HGBg < 12.1) {
      odchylOdNormy.push({
        reason: 'Niski poziom hemoglobiny (HGB)',
        result: ['Niedotlenienie organizmu', 'Podwyższone ryzyko zawału']
      });
    }

    if (HCT > 50.0) {
      odchylOdNormy.push({
        reason: 'Wysoki wskaźnik hematokrytu (HCT)',
        result: 'Odwodnienie organizmu'
      });
    } else if (HCT < 38.8) {
      odchylOdNormy.push({
        reason: 'Niski wskaźnik hematokrytu (HCT)',
        result: ['Możliwośc wystąpienia anemii', 'Niedobór żelaza']
      });
    }
  }

  return (
  <div className="assistant-component-container"> 
    <div className="header-container">
      <h2>Intelligent Assistant</h2>
      <div className="result-container">
        <div className="left-result-container">
        <h3>Odchył od normy </h3>
          <ul>
          {odchylOdNormy.map((el, index) => (
            <li key={index}>
              {el.reason}
            </li>
          ))}
          </ul>
        </div>
        
        <div className="mid-result-container"></div>

        <div className="right-result-container">
        <h3>Może powodować </h3>  
          <ul>
          {odchylOdNormy.map((el, index) => (
            <li key={index}>
              {Array.isArray(el.result) ? el.result.join(', ') : el.result}
            </li>
          ))}
        
          </ul>
        </div>
      </div>

    </div>
    
    </div>
  );
};

export default IntelligentAssistant;