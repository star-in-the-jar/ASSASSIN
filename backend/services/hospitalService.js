/**
 * @fileoverview This file contains the functions related to hospital operations.
 * It includes functions for creating a new hospital, retrieving all hospitals,
 * retrieving a hospital by its ID, deleting a hospital, and editing a hospital.
 * @module hospitalService
 */

const Hospital = require('../db/models/Hospital');
const authService = require('./authService');

/**
 * Creates a new hospital with the provided data.
 * @param {Object} hospitalData - The data for the new hospital.
 * @returns {Promise<Object>} - A promise that resolves to the newly created hospital.
 */
const createHospital = async (hospitalData) => {
    hospitalData.authInfo.password = await authService.hashPassword(hospitalData.authInfo.password);
    const newHospital = new Hospital(hospitalData)
    return newHospital;
}

/**
 * Retrieves all hospitals.
 * @returns {Promise<Array<Object>>} - A promise that resolves to an array of all hospitals.
 */
const getAllHospitals = async () => {
    return await Hospital.find();
}

/**
 * Retrieves a hospital by its ID.
 * @param {string} hospitalId - The ID of the hospital to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the hospital with the specified ID.
 */
const getHospitalById = async (hospitalId) => {
    return await Hospital.findById(hospitalId);
}

/**
 * Deletes a hospital by its ID.
 * @param {string} hospitalId - The ID of the hospital to delete.
 * @returns {Promise<Object>} - A promise that resolves to the deleted hospital.
 */
const deleteHospital = async (hospitalId) => {
    return await Hospital.findByIdAndDelete(hospitalId);
}

/**
 * Edits a hospital with the provided data.
 * @param {string} hospitalId - The ID of the hospital to edit.
 * @param {Object} hospitalData - The updated data for the hospital.
 * @returns {Promise<Object>} - A promise that resolves to the edited hospital.
 */
const editHospital = async (hospitalId, hospitalData) => {
    return await Hospital.findByIdAndUpdate(hospitalId, hospitalData, {
        new: true,
        runValidators: true,
    });
}

module.exports = {
    createHospital,
    getAllHospitals,
    getHospitalById,
    deleteHospital,
    editHospital
}