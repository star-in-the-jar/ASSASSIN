const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const patientSchema = new mongoose.Schema({
    name: String,
    surname: String,
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
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    }],
});


patientSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = { PatientModel };
