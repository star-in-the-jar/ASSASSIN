const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "",
    },
    surname: {
        type: String,
        default: "",
    },
    authInfo: {
        login: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    twofaEnabled: {
        type: Boolean,
        default: false,
    },
    twofaSecret: {
        type: String,
        default: "",
    },

    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        default: []
    }],
});

patientSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.authInfo.password);
};

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = PatientModel;
