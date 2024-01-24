/**
 * @fileoverview This file contains the controller functions for managing doctors.
 * It includes functions for creating, retrieving, updating, and deleting doctors.
 * The controller functions interact with the doctorService module to perform the necessary operations.
 * @module doctorController
 */
const doctorService = require('../services/doctorService')

/**
 * Creates a new doctor or updates an existing doctor with the given surname.
 * If a doctor with the given surname already exists, it updates the surname.
 * Otherwise, it creates a new doctor with the given surname.
 * 
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.surname - The surname of the doctor.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the doctor is created or updated.
 */
const createDoctor = async (req, res) => {
    try {
        const {surname} = req.body;

        let doctor = await doctorService.getDoctorBySurname({surname})

        if (!doctor) {
            doctor = await doctorService.createDoctor({surname})
        } else {
            doctor.surname = surname;
        }

        await doctor.save();
        res.status(201).json({ message: 'Doctor created successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Retrieves all doctors.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the list of doctors.
 */
const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors()
        res.json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Retrieves a doctor by their ID.
 * 
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the doctor.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the doctor or an error message if not found.
 */
const getDoctorById = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const doctor = await doctorService.getDoctorById(doctorId)
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Deletes a doctor by their ID.
 * 
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the doctor.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with a success message or an error message if not found.
 */
const deleteDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const deletedDoctor = doctorService.deleteDoctor(doctorId)
        if (!deletedDoctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json({ message: 'Doctor deleted successfully', deletedDoctor});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

/**
 * Updates the surname of a doctor by their ID.
 * 
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the doctor.
 * @param {Object} req.body - The request body.
 * @param {string} req.body.surname - The new surname of the doctor.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves with the updated doctor or an error message if not found.
 */
const editDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const {surname } = req.body;

        let doctor = await doctorService.getDoctorById(doctorId)
        if (!doctor){
            return res.status(404).json({ message: 'Doctor not found' });
        }

        doctor.surname = surname || doctor.surname;

        await doctor.save();

        res.json({ message: 'Doctor updated successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    createDoctor,
    getAllDoctors,
    getDoctorById,
    deleteDoctor,
    editDoctor
}