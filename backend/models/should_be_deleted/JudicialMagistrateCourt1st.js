const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const judicialMagistrateCourt1stSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    sessionCourt: {
        type: ObjectId,
        ref: 'SessionCourt',
    },

    judicialMagistrateCourts: [
        {
            type: ObjectId,
            ref: 'JudicialMagistrateCourt2nd',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('JudicialMagistrateCourt1st', judicialMagistrateCourt1stSchema);