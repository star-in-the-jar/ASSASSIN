const express = require('express');
const doctorController = require('../controllers/doctorController');

const router = express.Router();

router.get('/doctors', doctorController.getAllDoctors);

router.get('/doctors/:id', doctorController.getDoctorById);

router.post('/doctors', doctorController.createDoctor);

router.delete('/doctors/:id', doctorController.deleteDoctor);

router.put('/doctors/:id', doctorController.editDoctor);

module.exports = router;
