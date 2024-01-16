import React from "react";
import { useLocation } from "react-router-dom";
import Button from "./components/ui/Button";
import PatientInfo from "./components/ui/PatientInfo";
import TestResult from "./components/ui/TestResult";
import resultRequest from "../../exampleData/result_request.json";
import testResult from "../../exampleData/results.json";
import IntelligentAssistant from "./components/ui/AssistantComponent";
import "./UserData.css";

const User_Data = () => {
  const location = useLocation();
  const userData = location.state?.userData || {};

  const downloadPDF = () => {
    console.log("Download");
  };

  return (
    <div className="user_data">
      <div className="user_data_left_part">
        <PatientInfo patientName={userData} testInfo={resultRequest} />
        <IntelligentAssistant bloodTestResult={testResult} />

        <Button
          variant="blue"
          label="Pobierz jako PDF"
          onClick={() => downloadPDF}
        />
      </div>

      <TestResult testResult={testResult} />
    </div>
  );
};

export default User_Data;
