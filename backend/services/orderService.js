const mongoose = require('mongoose');
const Order = require('../db/models/Order');

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
    return existingOrder
}

const deleteOrder = async (orderId) => {
    return await Order.findByIdAndDelete(orderId);
}

const getOrderById = async (orderId) => {
    return await Order.findById(orderId);
}

const checkIfValidId = (id) => {
    return mongoose.Types.ObjectId.isValid(id)
}

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