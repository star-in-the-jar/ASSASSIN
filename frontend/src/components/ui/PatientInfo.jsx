import React from "react";
import './PatientInfo.css'

const PatientInfo = ({patientName,testInfo}) => {

    if(patientName&&testInfo){
        const {name,surname}=patientName;
        const {test_number,doc_surname,pesel}=testInfo.request_data;

        console.log(doc_surname)

        return (
            <div className="patientinfo-container">
                <span className="powrot">&lt;powrót</span>
                <div className="patientinfo-text">
                    <p>Imię pacjenta: <strong>{name}</strong>
                    <br/>
                    Nazwisko pacjenta: <strong>{surname}</strong>
                    <br/>
                    Pesel: <strong>{pesel}</strong>
                    <br/>
                    Nr zlecenia: <strong>{test_number}</strong>
                    <br/>
                    Nazwisko lekarza: <strong>{doc_surname}</strong></p>
                </div>
            </div>

        )

    }


};

export default PatientInfo;