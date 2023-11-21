const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const criminalCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    metropolitanCourt: {
        type: ObjectId,
        ref: 'MetropolitanCourt',
    },
    districtAndSessionCourt: {
        type: ObjectId,
        ref: 'DistrictAndSessionCourt',
    },

    sessionsCourts: [
        {
            type: ObjectId,
            ref: 'SessionsCourt',
        }
    ],
    
}, {timestamps: true});

module.exports = mongoose.model('CriminalCourt', criminalCourtSchema);