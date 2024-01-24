/**
 * @fileoverview Represents the Patient model and schema for the database.
 * @module Patient
 */

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

/**
 * Verifies the provided password against the stored hashed password.
 * @method
 * @param {string} password - The password to verify.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is correct, false otherwise.
 */
patientSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.authInfo.password);
};

/**
 * The Patient model.
 * @typedef {Model} PatientModel
 * @property {string} name - The name of the patient.
 * @property {string} surname - The surname of the patient.
 * @property {object} authInfo - The authentication information of the patient.
 * @property {string} authInfo.login - The login username of the patient.
 * @property {string} authInfo.password - The hashed password of the patient.
 * @property {boolean} twofaEnabled - Indicates whether two-factor authentication is enabled for the patient.
 * @property {string} twofaSecret - The secret key for two-factor authentication.
 * @property {Array.<mongoose.Schema.Types.ObjectId>} orders - The orders associated with the patient.
 */

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = PatientModel;
