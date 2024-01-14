import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    hospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    editedAt: Date,
    results: {
        wbc: String,
        rbc: String,
        hct: String,
        mcv: String,
        mch: String,
        plt: String,
        mpv: String,
        rdw: String,
        pdw: String,
        hemoglobin: String,
    },
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
