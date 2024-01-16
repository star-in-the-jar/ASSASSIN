import React from "react";
import { useState } from "react";
import Button from './components/ui/Button.jsx';
import Modal from "./components/ui/Modal.jsx";

const TestModal=()=>{
    const [openModal, setOpenModal]= useState(false);



    return (
        <div>
            <Button variant="blue" label="modal" onClick={() => {setOpenModal(true)}}>Button 1</Button>

            {openModal && <Modal closeModal={setOpenModal} />}

        </div>
    );
};

export default TestModal;