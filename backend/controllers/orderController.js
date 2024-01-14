const express = require('express');
const Order = require('../models/Order');
const mongoose = require("mongoose");

const router = express.Router();


router.post('/patient/results', async (req, res) => {
    try {
        const { hospital, doctor, patient, results } = req.body;

        if (!mongoose.Types.ObjectId.isValid(hospital) ||
            !mongoose.Types.ObjectId.isValid(doctor) ||
            !mongoose.Types.ObjectId.isValid(patient)) {
            return res.status(400).json({ message: 'Invalid ObjectId format for hospital, doctor, or patient.' });
        }

        const newOrder = new Order({
            hospital,
            doctor,
            patient,
            results,
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            message: 'Results added successfully',
            order: savedOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

router.get('/patient/results/:orderId',  async (req, res) => {
    try {
        const orderId = req.params.orderId.trim();

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({
                message: 'Order not found',
            });
        }

        res.status(200).json({
            message: 'Order details retrieved successfully',
            order,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
router.delete('/patient/results/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.status(404).json({
                message: 'Order not found',
            });
        }

        res.status(200).json({
            message: 'Order deleted successfully',
            order: deletedOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});
router.put('/patient/results/:orderId', async (req, res) => {
    try {
        const orderId = req.params.orderId.trim();

        const existingOrder = await Order.findById(orderId);

        if (!existingOrder) {
            return res.status(404).json({
                message: 'Order not found',
            });
        }

        const { hospital, doctor, patient, results } = req.body;

        if (hospital) {
            existingOrder.hospital = hospital;
        }
        if (doctor) {
            existingOrder.doctor = doctor;
        }
        if (patient) {
            existingOrder.patient = patient;
        }
        if (results) {
            existingOrder.results = results;
        }

        existingOrder.editedAt = new Date();

        const updatedOrder = await existingOrder.save();

        res.status(200).json({
            message: 'Order updated successfully',
            order: updatedOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
});

module.exports = router;
