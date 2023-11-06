const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const principleJuniorCivilCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    subCourt: {
        type: ObjectId,
        ref: 'SubCourt'
    },

    munsifCourts: [
        {
            type: ObjectId,
            ref: 'MunsifCourt',
        }
    ],

}, {timestamps: true});

module.exports = mongoose.model('PrincipleJuniorCivilCourt', principleJuniorCivilCourtSchema);