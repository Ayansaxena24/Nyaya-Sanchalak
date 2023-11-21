const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const districtCourtSchema = new mongoose.Schema({


    location: {
        pin: Number,
        state: String,
        city: String,
        address: String,
    },
    civilCourt: {
        type: ObjectId,
        ref: 'CivilCourt'
    },

    subCourts: [
        {
            type: ObjectId,
            ref: 'SubCourt',
        }
    ],

}, {timestamps: true});

module.exports = mongoose.model('DistrictCourt', districtCourtSchema);