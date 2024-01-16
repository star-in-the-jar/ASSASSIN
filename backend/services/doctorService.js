const DoctorModel = require('../models/Doctor');

const getAllDoctors = async (req, res) => {
    return await DoctorModel.find().populate('hospitals');
}

const getDoctorByUser = async (user) => {
    return await DoctorModel.findOne(user);
}

const createDoctor = async ({user, surname}) => {
    let doctor = new DoctorModel({ user, surname });
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

module.exports = {
    getAllDoctors,
    getDoctorByUser,
    createDoctor,
    getDoctorById,
    deleteDoctor
}