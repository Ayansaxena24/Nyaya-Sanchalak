const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const metropolitanCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    highCourt: {
        type: ObjectId,
        ref: 'HighCourt',
    },

    civilCourts: [
        {
            type: ObjectId,
            ref: 'CivilCourt',
        }
    ],
    criminalCourts: [
        {
            type: ObjectId,
            ref: 'CriminalCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('MetropolitanCourt', metropolitanCourtSchema);