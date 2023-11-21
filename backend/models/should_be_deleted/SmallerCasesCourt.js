const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const smallerCasesCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    cityCivilCourt: {
        type: ObjectId,
        ref: 'CityCivilCourt',
    },
    
}, {timestamps: true});

module.exports = mongoose.model('SmallerCasesCourt', smallerCasesCourtSchema);