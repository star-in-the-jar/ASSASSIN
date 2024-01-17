const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    user: {
        type: String,
        ref: 'UserModel',
        required: true,
    },
    surname: String,
    hospitals: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
    }],
});

doctorSchema.methods.verifyPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const DoctorModel = mongoose.model("doctor", doctorSchema);

module.exports = DoctorModel;
