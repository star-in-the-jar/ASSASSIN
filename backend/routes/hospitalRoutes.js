const express = require('express');
const hospitalController = require('../controllers/hospitalController');

const router = express.Router();

router.post('/hospitals', hospitalController.addHospital);

router.get('/hospitals', hospitalController.getAllHospitals);

router.get('/hospitals/:hospitalId', hospitalController.getHospitalById);

router.delete('/hospitals/:hospitalId', hospitalController.deleteHospital);

router.put('/hospitals/:id', hospitalController.editHospital);

module.exports = router;
