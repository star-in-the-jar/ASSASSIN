/**
 * @fileoverview This file contains the controller functions for handling orders.
 * It exports functions for creating, retrieving, deleting, and editing orders.
 * These functions interact with the orderService module to perform the necessary operations.
 * @module orderController
 */
const orderService = require('../services/orderService');

/**
 * Creates a new order.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the order is created.
 */
const createOrder = async (req, res) => {
    try {
        const { hospital, doctor, patient, results } = req.body;

        if (!orderService.checkIfValidId(hospital) ||
            !orderService.checkIfValidId(doctor) ||
            !orderService.checkIfValidId(patient) ) {
            return res.status(400).json({ message: 'Invalid ObjectId format for hospital, doctor, or patient.' });
        }

        const newOrder = await orderService.createOrder({ hospital, doctor, patient, results });
        await newOrder.save();

        res.status(201).json({
            message: 'Results added successfully',
            order: newOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

/**
 * Retrieves an order by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the order is retrieved.
 */
const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId.trim();

        const order = await orderService.getOrderById(orderId);
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
}

/**
 * Deletes an order by its ID.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the order is deleted.
 */
const deleteOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const deletedOrder = await orderService.deleteOrder(orderId);

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
}

/**
 * Edits an existing order.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the order is edited.
 */
const editOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId.trim();

        let existingOrder = orderService.getOrderById(orderId)

        if (!existingOrder) {
            return res.status(404).json({
                message: 'Order not found',
            });
        }

        const { hospital, doctor, patient, results } = req.body;

        existingOrder = await orderService.editOrder(existingOrder, { hospital, doctor, patient, results })
        await existingOrder.save();

        res.status(200).json({
            message: 'Order updated successfully',
            order: existingOrder,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports = {
    createOrder,
    getOrderById,
    deleteOrderById,
    editOrder,
};