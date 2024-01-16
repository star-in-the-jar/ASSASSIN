const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: String,
    role: {
        type: String,
        validate: {
            validator: function (value) {
                return value === 'hospital';
            },
            message: 'Role must be "hospital"',
        },
        required: true,
    },
    authInfo: {
        login: String,
        password: String,
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
    doctors: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    }],
    address: {
        street: String,
        zipCode: String,
        city: String,
    },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

module.exports = Hospital;
