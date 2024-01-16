import React from "react";
import { useState } from "react";
import PatientInfo from "./components/ui/PatientInfo";
import patientName from "../../exampleData/name.json";
import resultRequest from "../../exampleData/result_request.json"
import testResult from "../../exampleData/results.json"
import TestResult from "./components/ui/TestResult";

const Test = () =>{

    const [openModal, setOpenModal]= useState(false);

    return (
        <div name="test">
            
            <PatientInfo patientName={patientName} testInfo={resultRequest} />

            <TestResult testResult={testResult} />


            


        </div>
    );
};

export default Test;