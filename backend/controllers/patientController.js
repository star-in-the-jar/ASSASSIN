const express = require('express');
const PatientModel = require('../models/Patient');
const mongoose = require('mongoose');

const router = express.Router();


router.post('/patients', async (req, res) => {
    try {
        const { name, surname, authInfo } = req.body;

        if (!authInfo || !authInfo.login || !authInfo.password) {
            return res.status(400).json({ message: 'Invalid request. Please provide login and password.' });
        }

        const existingPatient = await PatientModel.findOne({ 'authInfo.login': authInfo.login });

        if (!existingPatient) {
            const newPatient = new PatientModel({
                name,
                surname,
                authInfo: {
                    login: authInfo.login,
                    password: authInfo.password,
                },
            });

            await newPatient.save();
            return res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
        } else {
            existingPatient.name = name;
            existingPatient.surname = surname;
            existingPatient.authInfo.password = authInfo.password;

            await existingPatient.save();
            return res.status(200).json({ message: 'Patient updated successfully', patient: existingPatient });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/patients/:id', async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }

        const patient = await PatientModel.findById(patientId);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get('/patients', async (req, res) => {
    try {
        const patients = await PatientModel.find();
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/patients/:id', async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }

        const deletedPatient = await PatientModel.findByIdAndDelete(patientId);

        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient deleted successfully', patient: deletedPatient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.put('/patients/:id', async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }

        const existingPatient = await PatientModel.findById(patientId);

        if (!existingPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        const { name, surname, authInfo } = req.body;

        if (name) {
            existingPatient.name = name;
        }

        if (surname) {
            existingPatient.surname = surname;
        }

        if (authInfo) {
            existingPatient.authInfo = authInfo;
        }

        const updatedPatient = await existingPatient.save();

        res.json({ message: 'Patient updated successfully', patient: updatedPatient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
