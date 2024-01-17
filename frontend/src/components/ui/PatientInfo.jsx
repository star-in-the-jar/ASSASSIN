import React from "react";
import "./PatientInfo.css";
import { Link, useNavigate } from "react-router-dom";

const PatientInfo = ({ patientName, testInfo }) => {
  const navigate = useNavigate();

  if (patientName && testInfo) {
    const { name, surname } = patientName;
    const { test_number, doc_surname, pesel } = testInfo.request_data;

    return (
      <div className="patientinfo-container">
        <Link onClick={() => navigate(-1)}>
          <span className="powrot">&lt;powrót</span>
        </Link>
        <div className="patientinfo-text">
          <p>
            Imię pacjenta: <strong>{name}</strong>
            <br />
            Nazwisko pacjenta: <strong>{surname}</strong>
            <br />
            Pesel: <strong>{pesel}</strong>
            <br />
            Nr zlecenia: <strong>{test_number}</strong>
            <br />
            Nazwisko lekarza: <strong>{doc_surname}</strong>
          </p>
        </div>
      </div>
    );
  }
};

export default PatientInfo;
