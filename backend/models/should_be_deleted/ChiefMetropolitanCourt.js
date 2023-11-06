const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const chiefMetropolitanCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    sossionCourt: {
        type: ObjectId,
        ref: 'SessionCourt',
    },

    metropolitanMagistrateCourts: [
        {
            type: ObjectId,
            ref: 'MetropolitanMagistrateCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('ChiefMetropolitanCourt', chiefMetropolitanCourtSchema);