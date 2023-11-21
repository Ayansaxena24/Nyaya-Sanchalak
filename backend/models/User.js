const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    jobId: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required: true,
    },
    roles: {
        Judge: Number,
        CourtAdmin: Number,
    },
    password: {
        type: String,
        required: true
    },
    court: {
        type: ObjectId,
        ref: 'Court'
    },
    refreshToken: String
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);