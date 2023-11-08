const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const CourtSchema = new mongoose.Schema({

    courtInfo: {
        category: {
            type: String,
            enum: ['metropolitan', 'district & session'],
            required: [true, 'court category is required!'],
        },
        subCategory: {
            type: String,
            enum: ['civil', 'criminal'],
            required: [true, 'court sub-category is required!'],
        },
        courtType: {
            type: String,
            enum: ['city civil court', 'court of smaller causes', 'sessions court', 'chief metropolitan court', 'metropolitan magistrate court', 'district court', 'sub court', 'principle junior civil court', 'munsif court', 'judicial magistrate 1st class court', 'judicial magistrate 2nd class court'],
            required: [true, 'court type is required!'],
        }
    },
    name: {
        type: String,
        required: [true, 'court name is required!'],
    },
    location: {
        pin: String,
        state: String,
        city: String,
        address: String,
    },
    
}, {timestamps: true});

module.exports = mongoose.model('Court', CourtSchema);