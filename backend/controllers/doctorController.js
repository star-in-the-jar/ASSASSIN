const express = require('express');
const router = express.Router();
const DoctorModel = require('../models/Doctor');


router.post('/doctors', async (req, res) => {
    try {
        const { user, surname } = req.body;
        let doctor = await DoctorModel.findOne({ user });

        if (!doctor) {
            doctor = new DoctorModel({ user, surname });
        } else {
            doctor.surname = surname;
        }

        await doctor.save();
        res.status(201).json({ message: 'Doctor created or updated successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/doctors/:id?', async (req, res) => {
    try {
        const doctorId = req.params.id;

        if (doctorId) {
            const doctor = await DoctorModel.findById(doctorId).populate('hospitals');
            if (!doctor) {
                return res.status(404).json({ message: 'Doctor not found' });
            }
            res.json(doctor);
        } else {
            const doctors = await DoctorModel.find().populate('hospitals');
            res.json(doctors);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/doctors/:id', async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await DoctorModel.findByIdAndDelete(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json({ message: 'Doctor deleted successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.put('/doctors/:id', async (req, res) => {
    try {
        const doctorId = req.params.id;
        const { user, surname } = req.body;

        let doctor = await DoctorModel.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }

        // Update the doctor fields
        doctor.user = user || doctor.user;
        doctor.surname = surname || doctor.surname;

        await doctor.save();

        res.json({ message: 'Doctor updated successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/doctors', async (req, res) => {
    try {
        const doctors = await DoctorModel.find().populate('hospitals');
        res.json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
