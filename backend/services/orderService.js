const mongoose = require('mongoose');
const Order = require('../db/models/Order');

const editOrder = async (existingOrder, { hospital, doctor, patient, results }) => {
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