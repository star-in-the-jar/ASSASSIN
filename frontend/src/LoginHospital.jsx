import React, { useState } from "react";
import Button from "./components/ui/Button";
import UiInput from "./components/ui/UiInput";
import "./LoginUser.css";
import { Link } from "react-router-dom";
import Modal from "./components/ui/Modal";
import { useNavigate } from "react-router-dom";

const Login_Hospital = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const onCodeFilled = (code) => {
    console.log(code);
  };

  return (
    <div className="login_view">
      <Link onClick={() => navigate(-1)} className="login_go_back">
        &lt;powrót
      </Link>
      <h1 className="login_view_title">Logowanie jako szpital</h1>
      <UiInput
        label="login szpitala"
        placeholder=""
        inputValue={username}
        onChange={setUsername}
      />
      <br></br>
      <br></br>
      <br></br>
      <UiInput
        label="haslo"
        placeholder=""
        inputValue={password}
        onChange={setPassword}
      />
      <br></br>
      <br></br>
      <br></br>
      <Button variant="blue" label="Zaloguj się" onClick={handleButtonClick} />
      <Link to="/login" className="login_other_view_link">
        Zaloguj się jako pacjent
      </Link>

      {isModalOpen && (
        <Modal closeModal={setIsModalOpen} onCodeFilled={onCodeFilled} />
      )}
    </div>
  );
};
export default Login_Hospital;
