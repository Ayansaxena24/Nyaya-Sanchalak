const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const judicialMagistrateCourt2ndSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    judicialMagistrateCourt1st: {
        type: ObjectId,
        ref: 'JudicialMagistrateCourt1st',
    },
    
}, {timestamps: true});

module.exports = mongoose.model('JudicialMagistrateCourt2nd', judicialMagistrateCourt2ndSchema);