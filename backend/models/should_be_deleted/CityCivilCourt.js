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
    civilCourt: {
        type: ObjectId,
        ref: 'CivilCourt',
    },
    smallerCasesCourts: [
        {
            type: ObjectId,
            ref: 'SmallerCasesCourt',
        }
    ],
    
    
}, {timestamps: true});

module.exports = mongoose.model('CivilCourt', civilCourtSchema);