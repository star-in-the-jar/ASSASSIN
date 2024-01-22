const express = require("express");
const patientController = require("../controllers/patientController");

const router = express.Router();

router.post('/patients', patientController.createPatient);

router.get('/patients/:id', patientController.getPatientById);

router.get('/patients', patientController.getAllPatients);

router.delete('/patients/:id', patientController.deletePatient);

router.delete('/patients/login/:login', patientController.deletePatientByLogin);

router.put('/patients/:id', patientController.editPatient);

module.exports = router;