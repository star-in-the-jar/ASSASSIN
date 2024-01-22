const Hospital = require('../db/models/Hospital');
const authService = require('./authService');

const createHospital = async (hospitalData) => {
    hospitalData.authInfo.password = await authService.hashPassword(hospitalData.authInfo.password);
    const newHospital = new Hospital(hospitalData)
    return newHospital;
}
const getAllHospitals = async () => {
    return await Hospital.find();
}

const getHospitalById = async (hospitalId) => {
    return await Hospital.findById(hospitalId);
}

const deleteHospital = async (hospitalId) => {
    return await Hospital.findByIdAndDelete(hospitalId);
}

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