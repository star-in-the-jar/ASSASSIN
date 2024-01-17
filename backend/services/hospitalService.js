const Hospital = require('../db/models/Hospital');

const createHospital = async (hospitalData) => {
    return Hospital.create(hospitalData);
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