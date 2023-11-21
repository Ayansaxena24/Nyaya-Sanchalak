const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const civilCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    superType: {
        type: String,
        enum: ['metropolitanCourt', 'districtAndSessionCourt'],
        required: [true, 'super type is required!'],
    },
    metropolitanCourt: {
        type: ObjectId,
        ref: 'MetropolitanCourt',
    },
    districtAndSessionCourt: {
        type: ObjectId,
        ref: 'DistrictAndSessionCourt',
    },

    subType: {
        type: String,
        enum: ['cityCivilCourts', 'districtCourts'],
        required: [true, 'sub type is required!'],
    },
    cityCivilCourts: [
        {
            type: ObjectId,
            ref: 'CityCivilCourt',
        }
    ],
    districtCourts: [
        {
            type: ObjectId,
            ref: 'DistrictCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('CivilCourt', civilCourtSchema);