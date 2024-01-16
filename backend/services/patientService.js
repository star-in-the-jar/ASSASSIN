const getPatientByAuthLogin = async (authLogin) => {
    return await PatientModel.findOne({ 'authInfo.login': authLogin });
}

const createPatient = async ({name, surname, authInfo}) => {
    const newPatient = new PatientModel({
        name,
        surname,
        authInfo: {login: authInfo.login, password: authInfo.password}});
    return newPatient;
}

const checkIfValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id)
}

const getAllPatients = async () => {
    return await PatientModel.find();
}

const getPatientById = async (patientId) => {
    return await PatientModel.findById(patientId);
}

const deletePatient = async (patientId) => {
    await PatientModel.findByIdAndDelete(patientId);
}

const editPatient = async ({name, surname, authInfo}, existingPatient) => {
    if (name) {
        existingPatient.name = name;
    }

    if (surname) {
        existingPatient.surname = surname;
    }

    if (authInfo) {
        existingPatient.authInfo = authInfo;
    }

    return await existingPatient.save();
}

module.exports = {
    getAllPatients,
    getPatientByAuthLogin,
    createPatient,
    getPatientById,
    deletePatient,
    editPatient,
    checkIfValidId
}