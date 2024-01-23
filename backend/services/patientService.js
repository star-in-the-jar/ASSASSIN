/**
 * @fileoverview This file contains the patient service functions.
 * @module patientService
 */

const mongoose = require('mongoose');
const PatientModel = require('../db/models/Patient');

/**
 * Retrieves a patient by their authentication login.
 * @param {string} authLogin - The authentication login of the patient.
 * @returns {Promise<Object>} - A promise that resolves to the patient object.
 */
const getPatientByAuthLogin = async (authLogin) => {
    return await PatientModel.findOne({ 'authInfo.login': authLogin });
}

/**
 * Creates a new patient.
 * @param {Object} patientData - The data of the patient to be created.
 * @param {string} patientData.name - The name of the patient.
 * @param {string} patientData.surname - The surname of the patient.
 * @param {Object} patientData.authInfo - The authentication information of the patient.
 * @param {string} patientData.authInfo.login - The login of the patient.
 * @param {string} patientData.authInfo.password - The password of the patient.
 * @returns {Object} - The newly created patient object.
 */
const createPatient = async ({name, surname, authInfo}) => {
    const newPatient = new PatientModel({
        name,
        surname,
        authInfo: {login: authInfo.login, password: authInfo.password}});
    return newPatient;
}

/**
 * Creates a new patient with only authentication information.
 * @param {Object} authData - The authentication information of the patient.
 * @param {string} authData.login - The login of the patient.
 * @param {string} authData.password - The password of the patient.
 * @returns {Object} - The newly created patient object.
 */
const createPatientAuth = async ({login, password}) => {
    const newPatient = new PatientModel({
        authInfo: {login: login, password: password}});
    return newPatient;
}

/**
 * Checks if a given ID is a valid MongoDB ObjectID.
 * @param {string} id - The ID to be checked.
 * @returns {boolean} - True if the ID is valid, false otherwise.
 */
const checkIfValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id)
}

/**
 * Retrieves all patients.
 * @returns {Promise<Array>} - A promise that resolves to an array of patient objects.
 */
const getAllPatients = async () => {
    return await PatientModel.find();
}

/**
 * Retrieves a patient by their ID.
 * @param {string} patientId - The ID of the patient.
 * @returns {Promise<Object>} - A promise that resolves to the patient object.
 */
const getPatientById = async (patientId) => {
    return await PatientModel.findById(patientId);
}

/**
 * Deletes a patient by their ID.
 * @param {string} patientId - The ID of the patient to be deleted.
 * @returns {Promise<Object>} - A promise that resolves to the deleted patient object.
 */
const deletePatient = async (patientId) => {
    return await PatientModel.findByIdAndDelete(patientId);
}

/**
 * Deletes a patient by their authentication login.
 * @param {string} login - The authentication login of the patient to be deleted.
 * @returns {Promise<Object>} - A promise that resolves to the deleted patient object.
 */
const deletePatientByLogin = async (login) => {
    return await PatientModel.findOneAndDelete({ 'authInfo.login': login });
};

/**
 * Edits an existing patient.
 * @param {Object} patientData - The updated data of the patient.
 * @param {string} patientData.name - The updated name of the patient.
 * @param {string} patientData.surname - The updated surname of the patient.
 * @param {Object} patientData.authInfo - The updated authentication information of the patient.
 * @param {string} patientData.authInfo.login - The updated login of the patient.
 * @param {string} patientData.authInfo.password - The updated password of the patient.
 * @param {Object} existingPatient - The existing patient object to be edited.
 * @returns {Object} - The edited patient object.
 */
const editPatient = ({name, surname, authInfo}, existingPatient) => {
    if (name) {
        existingPatient.name = name;
    }

    if (surname) {
        existingPatient.surname = surname;
    }

    if (authInfo) {
        existingPatient.authInfo = authInfo;
    }

    return existingPatient;
}

/**
 * Retrieves a patient by their authentication login.
 * @param {string} login - The authentication login of the patient.
 * @returns {Promise<Object>} - A promise that resolves to the patient object.
 */
const getPatientByLogin = async (login) => {
    return await PatientModel.findOne({ "authInfo.login":  login});
}

module.exports = {
    getAllPatients,
    getPatientByAuthLogin,
    createPatient,
    getPatientById,
    deletePatient,
    editPatient,
    checkIfValidId,
    getPatientByLogin,
    createPatientAuth,
    deletePatientByLogin,
}