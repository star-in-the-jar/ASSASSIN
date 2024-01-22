const patientService = require('../services/patientService');
const authService = require('../services/authService');

const createPatient = async (req, res) => {
    try {
        let { name, surname, authInfo } = req.body;

        if (!authInfo || !authInfo.login || !authInfo.password) {
            return res.status(400).json({ message: 'Invalid request. Please provide login and password.' });
        }

        let existingPatient = await patientService.getPatientByAuthLogin(authInfo.login)

        if (!existingPatient) {
            authInfo.password = await authService.hashPassword(authInfo.password);
            const newPatient = await patientService.createPatient({name, surname, authInfo})

            await newPatient.save();
            return res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
        } else {
            return res.status(400).json({ message: 'Patient already exists', patient: existingPatient });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getPatientById = async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!patientService.checkIfValidId(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }
        const patient = await patientService.getPatientById(patientId);

        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(patient);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getAllPatients = async (req, res) => {
    try {
        const patients = await patientService.getAllPatients();
        res.json(patients);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const deletePatient = async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!patientService.checkIfValidId(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }

        const deletedPatient = await patientService.deletePatient(patientId);

        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient deleted successfully', patient: deletedPatient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const deletePatientByLogin = async (req, res) => {
    try {
        const login = req.params.login;

        const deletedPatient = await patientService.deletePatientByLogin(login);

        if (!deletedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json({ message: 'Patient deleted successfully', patient: deletedPatient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const editPatient = async (req, res) => {
    try {
        const patientId = req.params.id;

        if (!patientService.checkIfValidId(patientId)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for patient id.' });
        }

        let existingPatient = await patientService.getPatientById(patientId)
        if (!existingPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        let { name, surname, authInfo } = req.body;
        authInfo.password = await authService.hashPassword(authInfo.password);

        const isPatientOfSameLogin = await patientService.getPatientByAuthLogin(authInfo.login);
        if (isPatientOfSameLogin) {
            return res.status(400).json({ message: 'Patient with this login already exists' });
        }

        const updatedPatient = patientService.editPatient({ name, surname, authInfo }, existingPatient);
        updatedPatient.save();
        res.json({ message: 'Patient updated successfully', patient: updatedPatient });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    createPatient,
    getPatientById,
    getAllPatients,
    deletePatient,
    editPatient,
    deletePatientByLogin,
};