const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/patient/results', orderController.createOrder);

router.get('/patient/results/:orderId', orderController.getOrderById);

router.delete('/patient/results/:orderId', orderController.deleteOrderById);

router.put('/patient/results/:orderId', orderController.editOrder);

module.exports = router;
