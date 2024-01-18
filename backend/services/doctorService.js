const DoctorModel = require('../db/models/Doctor');

const getAllDoctors = async () => {
    return await DoctorModel.find().populate('hospitals');
}

const getDoctorBySurname = async (surname) => {
    return await DoctorModel.findOne(surname);
}

const createDoctor = async (doctorData) => {
    let doctor = new DoctorModel(doctorData);
    return doctor;
}

const getDoctorById = async (doctorId) => {
    return await DoctorModel.findById(doctorId).populate('hospitals');
}

const deleteDoctor = async (doctorId) => {
    let doctor = await getDoctorById(doctorId);
    if (!doctor) {
        return null;
    }
    return await DoctorModel.findByIdAndDelete(doctorId);
}

const getDoctorByLogin = async (login) => {
    return await DoctorModel.findOne({ "authInfo.login":  login});
}

module.exports = {
    getAllDoctors,
    getDoctorBySurname,
    createDoctor,
    getDoctorById,
    deleteDoctor,
    getDoctorByLogin
}