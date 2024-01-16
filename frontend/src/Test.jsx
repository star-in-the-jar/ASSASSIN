import React from "react";
import { useState } from "react";
import PatientInfo from "./components/ui/PatientInfo";
import patientName from "../../exampleData/name.json";
import resultRequest from "../../exampleData/result_request.json"
import testResult from "../../exampleData/results.json"
import Button from './components/ui/Button.jsx';
import Modal from "./components/ui/Modal.jsx";
import TestResult from "./components/ui/TestResult";

const Test = () =>{

    const [openModal, setOpenModal]= useState(false);

    const handleButtonClick = () => {
        console.log("działa?");
        navigate('/login');
      };
    return (
        <div name="test">
            
            <PatientInfo patientName={patientName} testInfo={resultRequest} />

            <TestResult testResult={testResult} />

            <Button variant="blue" label="modal" onClick={() => {setOpenModal(true)}}>Button 1</Button>

            {openModal && <Modal closeModal={setOpenModal} />}

            


        </div>
    );
};

export default Test;