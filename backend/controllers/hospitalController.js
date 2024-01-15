const express = require('express');

const Hospital = require('../models/Hospital');

const router = express.Router();
router.post('/hospitals', async (req, res) => {
    try {
        const hospitalData = req.body;
        const hospital = await Hospital.create(hospitalData);
        res.status(201).json({ message: 'Hospital created successfully', hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/hospitals', async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json({ hospitals });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/hospitals/:hospitalId', async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        const hospital = await Hospital.findById(hospitalId);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({ hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.delete('/hospitals/:hospitalId', async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        const deletedHospital = await Hospital.findByIdAndDelete(hospitalId);
        if (!deletedHospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({ message: 'Hospital deleted successfully', hospital: deletedHospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.put('/hospitals/:id', async (req, res) => {
    try {
        const hospitalId = req.params.id;
        const hospitalData = req.body;
        const hospital = await Hospital.findByIdAndUpdate(hospitalId, hospitalData, {
            new: true,
            runValidators: true,
        });
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json({ message: 'Hospital updated successfully', hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = router;
