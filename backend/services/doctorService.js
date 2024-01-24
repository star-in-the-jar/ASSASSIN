/**
 * @fileoverview This file contains the implementation of various functions related to doctors in the backend service.
 * It exports functions for retrieving doctors, creating doctors, deleting doctors, and finding doctors by different criteria.
 * The functions interact with the DoctorModel and HospitalModel from the database.
 * @module doctorService
 */

const DoctorModel = require('../db/models/Doctor');
const HospitalModel = require('../db/models/Hospital');

/**
 * Retrieves all doctors from the database.
 * @returns {Promise<Array>} A promise that resolves to an array of doctors.
 */
const getAllDoctors = async () => {
    return await DoctorModel.find().populate('hospitals');
}

/**
 * Retrieves a doctor by their surname.
 * @param {string} surname - The surname of the doctor.
 * @returns {Promise<Object>} A promise that resolves to the doctor object.
 */
const getDoctorBySurname = async (surname) => {
    return await DoctorModel.findOne(surname);
}

/**
 * Creates a new doctor.
 * @param {Object} doctorData - The data of the doctor to be created.
 * @returns {Promise<Object>} A promise that resolves to the newly created doctor object.
 */
const createDoctor = async (doctorData) => {
    let doctor = new DoctorModel(doctorData);
    return doctor;
}

/**
 * Creates a new doctor with authentication information.
 * @param {Object} authData - The authentication data of the doctor.
 * @param {string} authData.login - The login of the doctor.
 * @param {string} authData.password - The password of the doctor.
 * @returns {Promise<Object>} A promise that resolves to the newly created doctor object.
 */
const createDoctorAuth = async ({login, password}) => {
    const hospital = await HospitalModel.findOne({authInfo: {login: login, password: password}});
    if (!hospital) {
        return null;
    }
    const newDoctor = new DoctorModel({
        surname: "",
        hospitals: [
            hospital
        ]
    });
    return newDoctor;
}

/**
 * Retrieves a doctor by their ID.
 * @param {string} doctorId - The ID of the doctor.
 * @returns {Promise<Object>} A promise that resolves to the doctor object.
 */
const getDoctorById = async (doctorId) => {
    return await DoctorModel.findById(doctorId).populate('hospitals');
}

/**
 * Deletes a doctor by their ID.
 * @param {string} doctorId - The ID of the doctor to be deleted.
 * @returns {Promise<Object>} A promise that resolves to the deleted doctor object.
 */
const deleteDoctor = async (doctorId) => {
    let doctor = await getDoctorById(doctorId);
    if (!doctor) {
        return null;
    }
    return await DoctorModel.findByIdAndDelete(doctorId);
}

/**
 * Retrieves a doctor by their login.
 * @param {string} login - The login of the doctor.
 * @returns {Promise<Object>} A promise that resolves to the doctor object.
 */
const getDoctorByLogin = async (login) => {
    return await DoctorModel.findOne({ "authInfo.login":  login});
}

module.exports = {
    getAllDoctors,
    getDoctorBySurname,
    createDoctor,
    getDoctorById,
    deleteDoctor,
    getDoctorByLogin,
    createDoctorAuth
}