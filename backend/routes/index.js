const orderRoutes = require('./orderRoutes');
const hospitalRoutes = require('./hospitalRoutes');
const doctorRoutes = require('./doctorRoutes');
const patientRoutes = require('./patientRoutes');
const authRoutes = require('./authRoutes');
const express = require('express');

const router = express.Router();
router.use('/api', orderRoutes);
router.use('/api', hospitalRoutes);
router.use('/api', doctorRoutes);
router.use('/api', patientRoutes);
router.use('/api', authRoutes);

module.exports = router;
