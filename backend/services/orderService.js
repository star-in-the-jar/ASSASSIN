/**
 * @fileoverview This file contains the order service functions for creating, retrieving, editing, and deleting orders.
 * @module orderService
 */

const mongoose = require('mongoose');
const Order = require('../db/models/Order');

/**
 * Edits an existing order with the provided data.
 * @param {Object} existingOrder - The existing order to be edited.
 * @param {Object} data - The data to update the existing order.
 * @returns {Object} - The updated existing order.
 */
const editOrder = async (existingOrder, data) => {
    if (data.hospital) {
        existingOrder.hospital = data.hospital;
    }
    if (data.doctor) {
        existingOrder.doctor = data.doctor;
    }
    if (data.patient) {
        existingOrder.patient = data.patient;
    }
    if (data.results) {
        existingOrder.results = data.results;
    }
    existingOrder.editedAt = new Date();
    return existingOrder;
}

/**
 * Deletes an order with the provided orderId.
 * @param {string} orderId - The ID of the order to be deleted.
 * @returns {Promise<Object>} - A promise that resolves to the deleted order.
 */
const deleteOrder = async (orderId) => {
    return await Order.findByIdAndDelete(orderId);
}

/**
 * Retrieves an order by its orderId.
 * @param {string} orderId - The ID of the order to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the retrieved order.
 */
const getOrderById = async (orderId) => {
    return await Order.findById(orderId);
}

/**
 * Checks if the provided ID is a valid mongoose ObjectId.
 * @param {string} id - The ID to check.
 * @returns {boolean} - True if the ID is valid, false otherwise.
 */
const checkIfValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
}

/**
 * Creates a new order with the provided data.
 * @param {Object} order - The data for the new order.
 * @returns {Object} - The newly created order.
 */
const createOrder = async (order) => {
    const newOrder = new Order(order);
    return newOrder;
}

module.exports = {
    createOrder,
    getOrderById,
    deleteOrder,
    editOrder,
    checkIfValidId
}