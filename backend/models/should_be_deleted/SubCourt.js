const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const subCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    districtCourt: {
        type: ObjectId,
        ref: 'DistrictCourt'
    },

    principleJuniorCivilCourts: [
        {
            type: ObjectId,
            ref: 'PrincipleJuniorCivilCourt',
        }
    ],

}, {timestamps: true});

module.exports = mongoose.model('SubCourt', subCourtSchema);