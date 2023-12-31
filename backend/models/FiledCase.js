const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const filedCaseSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ['civil', 'criminal', 'caveat filing'],
        required: [true, 'case category is required!'],
    },
    caseType: {
        type: String,
        required: [true, 'case type is required!'],
    },
    plaintiffDetails: {
        plaintiff: {
            name: {
                type: String,
                required: [true, 'plaintiff name is required!'],
            },
            gender: {
                type: String,
                enum: ['male', 'female', 'other'],
                required: [true, 'plaintiff gender is required!'],
            },
            age: {
                type: String,
                required: [true, 'plaintiff age is required!'],
            },
            extraPetitionerCnt: String,
            mobile: {
                type: String,
                required: [true, 'plaintiff mobile no. is required!'],
            }
        },
        advocate: {
            name: {
                type: String,
            },
            barRegNum: {
                type: String,
            },
            email: {
                type: String,
            }
        },
        
    },
    defendantDetails: {
        defendant: {
            name: {
                type: String,
                required: [true, 'defendant name is required!'],
            },
            gender: {
                type: String,
                enum: ['male', 'female', 'other'],
                required: [true, 'defendant gender is required!'],
            },
            age: {
                type: String,
                required: [true, 'defendant age is required!'],
            },
            extraPetitionerCnt: String,
            mobile: {
                type: String,
                required: [true, 'defendant mobile no. is required!'],
            }
        },
    },

    valuation: {
        type: String,
    },
    amount: {
        type: String,
    },
    filingDate: {
        type: Date,
    },
    filingTime: {
        type: String,
    },
    prayer: {
        type: String,
    },
    reliefClaimed: {
        type: String,
    },
    causeOfAction: {
        type: String,
    },
    act1: {
        type: String,
    },
    actSection1: {
        type: String,
    },
    causeOfActionDate: {
        type: Date,
    },

    filingNum: {
        type: String,
    },
    cnrNum: {
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model('FiledCase', filedCaseSchema);