const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const sessionCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    criminalCourt: {
        type: ObjectId,
        ref: 'CriminalCourt',
    },

    subType: {
        type: String,
        enum: ['chiefMetropolitanCourts', 'judicialMagistrateCourts'],
        required: [true, 'sub type is required!'],
    },
    chiefMetropolitanCourts: [
        {
            type: ObjectId,
            ref: 'ChiefMetropolitanCourt',
        }
    ],
    judicialMagistrateCourts: [
        {
            type: ObjectId,
            ref: 'JudicialMagistrateCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('SessionCourt', sessionCourtSchema);