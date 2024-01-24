/**
 * @fileoverview Hospital Controller
 * This file contains the controller functions for managing hospitals.
 * @module hospitalController
 */

const hospitalService = require('../services/hospitalService');
const authService = require('../services/authService');

/**
 * Add a new hospital.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the hospital is created.
 */
const addHospital = async (req, res) => {
    try {
        const hospitalData = req.body;
        const hospital = await hospitalService.createHospital(hospitalData)
        await hospital.save();
        res.status(201).json({ message: 'Hospital created successfully', hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Get all hospitals.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the list of hospitals.
 */
const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await hospitalService.getAllHospitals()
        res.status(200).json({ hospitals });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Get a hospital by its ID.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the hospital.
 */
const getHospitalById = async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        const hospital = await hospitalService.getHospitalById(hospitalId);
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({ hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Delete a hospital by its ID.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the hospital is deleted.
 */
const deleteHospital = async (req, res) => {
    try {
        const hospitalId = req.params.hospitalId;
        const deletedHospital = await hospitalService.deleteHospital(hospitalId);
        if (!deletedHospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.status(200).json({ message: 'Hospital deleted successfully', hospital: deletedHospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Edit a hospital by its ID.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the hospital is updated.
 */
const editHospital = async (req, res) => {
    try {
        const hospitalId = req.params.id;
        const hospitalData = req.body;
        const hospital = await hospitalService.editHospital(hospitalId, hospitalData)
        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }
        res.json({ message: 'Hospital updated successfully', hospital });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    addHospital,
    getAllHospitals,
    getHospitalById,
    deleteHospital,
    editHospital,
};