const doctorService = require('../services/doctorService')

const createDoctor = async (req, res) => {
    try {
        const { user, surname } = req.body;

        let doctor = await doctorService.getDoctorByUser({user})

        if (!doctor) {
            doctor = await doctorService.createDoctor({user, surname})
        } else {
            doctor.surname = surname;
        }

        await doctor.save();
        res.status(201).json({ message: 'Doctor created or updated successfully', doctor });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors()
        res.json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

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

const editDoctor = async (req, res) => {
    try {
        const doctorId = req.params.id;
        const { user, surname } = req.body;

        let doctor = await doctorService.getDoctorById(doctorId)
        if (!doctor){
            return res.status(404).json({ message: 'Doctor not found' });
        }

        doctor.user = user || doctor.user;
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