import React, { useState } from "react";
import UiInput from "./components/ui/UiInput";
import "./AddResults.css"
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./components/ui/Button";

const AddResults=()=>{
    const {state}=useLocation();
    const {testNumber,docSurname,pesel}=state;

    const navigate=useNavigate();

    const [WBC,setWBC]=useState("");
    const [RBC,setRBC]=useState("");
    const [HTC,setHTC]=useState("");
    const [hem,setHem]=useState("");
    const [MCH,setMCH]=useState("");
    const [PLT,setPLT]=useState("");
    const [MPV,setMPV]=useState("");
    const [RDW,setRDW]=useState("");
    const [PDW,setPDW]=useState("");
    const [MCV,setMCV]=useState("");

    const handleButtonClick=()=>{
        if(!isNaN(+WBC)&&!isNaN(+RBC)&&!isNaN(+HTC)&&!isNaN(+hem)&&!isNaN(+MCH)
        && !isNaN(+PLT) && !isNaN(+MPV) && !isNaN(+RDW) && !isNaN(+PDW) && !isNaN(+MCV))
        {
            console.log("nr Zlecenia: "+testNumber+"\n"+
                        "nazwisko doktora: "+docSurname+"\n"+
                        "pesel: "+pesel+"\n"+
                        "WBC: "+WBC+"\n"+"RBC: "+RBC+"\n"+
                        "HTC: "+HTC+"\n"+"Hemoglobina: "+hem+"\n"+
                        "MCH: "+MCH+"\n"+"PLT: "+PLT+"\n"+
                        "MPV: "+MPV+"\n"+"RDW: "+RDW+"\n"+
                        "PDW: "+PDW+"\n"+"MCV: "+MCV)
        }
    }

    return (
        <div className="data-containers">
            <div>
            <Link onClick={() => navigate(-1)}>
            <h4>&lt;powrót</h4>
        </Link>
            </div>
            <div className="text-info">
                Wprowadzanie wyników pacjenta
            </div>
            <div className="inputs-container">
                <div className="input">
                    <UiInput
                    label="WBC"
                    inputValue={WBC}
                    onChange={setWBC}
                    
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="RBC"
                    inputValue={RBC}
                    onChange={setRBC}
                    
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="HTC"
                    inputValue={HTC}
                    onChange={setHTC}
                    
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="Hemoglobina"
                    inputValue={hem}
                    onChange={setHem}
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="MCH"
                    inputValue={MCH}
                    onChange={setMCH}
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="PLT"
                    inputValue={PLT}
                    onChange={setPLT}
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="MPV"
                    inputValue={MPV}
                    onChange={setMPV}
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="RDW"
                    inputValue={RDW}
                    onChange={setRDW}
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="PDW"
                    inputValue={PDW}
                    onChange={setPDW}
                    
                    />
                </div>
                <div className="input">
                    <UiInput
                    label="MCV"
                    inputValue={MCV}
                    onChange={setMCV}
                    
                    />
                </div>

            </div>
            <div>
                <Button
                variant="blue"
                label="Zatwierdź"
                onClick={handleButtonClick}
                />
            </div>

            
        </div>
    );
};

export default AddResults;