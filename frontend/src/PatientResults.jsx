import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./components/ui/Button";
import UiInput from "./components/ui/UiInput";
import "./PatientResults.css";
import { Link } from "react-router-dom";

const Patient_Results = () => {
  const navigate = useNavigate();
  const [zlecenie, setZlecenie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [pesel, setPesel] = useState("");

  const handleButtonClick = () => {
    const userData = {
      zlecenie: zlecenie,
      nazwisko: nazwisko,
      pesel: pesel,
    };
    navigate("/user-data", { state: { userData: userData } });
  };

  return (
    <div className="results_view">
      <Link onClick={() => navigate(-1)}>
        <h4>&lt;powrót</h4>
      </Link>
      <h3>Pobieranie wyników</h3>
      <UiInput
        label="nr Zlecenia"
        placeholder="42021376969"
        inputValue={zlecenie}
        onChange={setZlecenie}
      />
      <br></br>
      <br></br>
      <br></br>
      <UiInput
        label=""
        placeholder="nazwisko Lekarza"
        inputValue={nazwisko}
        onChange={setNazwisko}
      />
      <br></br>
      <br></br>

      <UiInput
        label=""
        placeholder="Pesel"
        inputValue={pesel}
        onChange={setPesel}
      />
      <br></br>
      <br></br>
      <br></br>

      <Button variant="blue" label="Pobierz" onClick={handleButtonClick} />
    </div>
  );
};

export default Patient_Results;
