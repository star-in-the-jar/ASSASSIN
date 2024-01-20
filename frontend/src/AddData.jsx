import React, { useState } from "react";
import UiInput from "./components/ui/UiInput";
import Button from "./components/ui/Button";
import "./AddData.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AddResults from "./AddResults";

const AddData= () =>{

    const navigate=useNavigate();

    const [testNumber,setTestNumber]=useState("");
    const [docSurname,setDocSurname]=useState("");
    const [pesel,setPesel]=useState("");


    const handleButtonClick=()=>{
        if((!isNaN(+testNumber)&&testNumber.length==12)&&docSurname.length>0&&(!isNaN(+pesel)&&pesel.length==11)){
            navigate("/add-data/add-results",{state:{testNumber:testNumber,docSurname:docSurname,pesel:pesel}})
        }

    }



    return(
    <div className="data-container">
        <div>
            <Link onClick={() => navigate(-1)}>
            <h4>&lt;powrót</h4>
        </Link>
        </div>
        <div className="text1">
            Wprowadzanie danych pacjenta

        </div>
        <div className="input-container">
            <div className="input" id="zlecenie">
                <UiInput
                label="nr Zlecenia"
                inputValue={testNumber}
                onChange={setTestNumber}
                />

            </div>
            <div className="input">
                <UiInput
                placeholder="nazwisko Lekarza"
                inputValue={docSurname}
                onChange={setDocSurname}
                />

            </div>
            <div className="input">
                <UiInput
                placeholder="Pesel"
                inputValue={pesel}
                onChange={setPesel}
                />

            </div>
            <div>
                <Button
                variant="blue"
                label="Kontynuuj"
                onClick={handleButtonClick}
                />

            </div>
        </div>
        
    </div>
    );
};

export default AddData;