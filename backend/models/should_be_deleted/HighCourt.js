const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const highCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    metropolitanCourts: [
        {
            type: ObjectId,
            ref: 'MetropolitanCourt',
        }
    ],
    districtAndSessionCourts: [
        {
            type: ObjectId,
            ref: 'DistrictAndSessionCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('HighCourt', highCourtSchema);