const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const metropolitanMagistrateCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    chiefMetropolitanCourt: {
        type: ObjectId,
        ref: 'ChiefMetropolitanCourt',
    },
    
    
}, {timestamps: true});

module.exports = mongoose.model('MetropolitanMagistrateCourt', metropolitanMagistrateCourtSchema);