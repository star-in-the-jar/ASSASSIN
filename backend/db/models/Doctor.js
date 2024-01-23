/**
 * @fileoverview Defines the Doctor model and schema for the backend application.
 * @module Doctor
 */

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    surname: String,
    hospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }],
});

/**
 * Verifies the password for the doctor.
 * @method
 * @param {string} password - The password to be verified.
 * @returns {Promise<boolean>} - A promise that resolves to true if the password is verified, otherwise false.
 */
doctorSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

/**
 * Represents the Doctor model.
 * @type {mongoose.Model<Doctor>}
 */
const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = DoctorModel;
