const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const munsifCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    principleJuniorCivilCourt: {
        type: ObjectId,
        ref: 'PrincipleJuniorCivilCourt'
    },

}, {timestamps: true});

module.exports = mongoose.model('MunsifCourt', munsifCourtSchema);