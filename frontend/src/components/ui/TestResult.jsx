import React from "react";
import "./TestResult.css";

const myComponent = {
  overflowX: "hidden",
  overflowY: "scroll",
};

const TestResult = ({ testResult }) => {
  if (testResult) {
    console.log(testResult.blood_test_result);
    const testResultsToArray = Object.keys(testResult.blood_test_result).map(
      (key) => {
        console.log(key);
        return {
          ...testResult.blood_test_result[key],
          name: key,
        };
      }
    );
    return (
      <div className="testResult-container" style={myComponent}>
        <div className="wyniki-container">WYNIKI BADAŃ</div>
        <div className="wspolczynnik-container">
          <ul>
            {testResultsToArray.map((el) => {
              return (
                <li key={el.name} className="testResult-entity-result">
                  <div className="testResult-entity-name">{el.name}</div>
                  <div
                    className="testResult-entity-progressbar"
                    style={{
                      "--min": el.min,
                      "--max": el.max,
                      "--value": el.value > el.max ? el.max : el.value,
                    }}
                    data-min={el.min}
                    data-max={el.max}
                    data-value={el.value}
                  ></div>
                  <span
                    className="testResult-entity-value"
                    style={{
                      color: el.value > el.max ? "red" : "black",
                    }}
                  >
                    {el.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
};

export default TestResult;
