const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

// TODO
const caseSchema = new mongoose.Schema({
    caseNumber: {
        type: String,
        unique: [true, 'case number must be unique!'],
        required: [true, 'case number is required!'],
    },
    caseType: {
        type: ObjectId,
        ref: 'CaseType',
        required: [true, 'case type is required!'],
    },
    caseYear: {
        type: Date,
        required: [true, 'case year is required!'],
    },
    caseStatus: {
        type: String,
        enum: [
            'pending', 
            '', 
            '', 
        ],
        default: '',
        required: [true, 'case status is required!'],
    },

    filingNumber: {
        type: Number,
    },
    regNumber: {
        type: Number,
    },
    cnrNumber: {
        type: Number,
    },
    caseDesc: {
        type: String,
    },
    petitionerInfo: {
        petitioner: {

        },
        advocate: {

        }
    },
    respondentInfo: {
        respondent: {

        },
        advocate: {

        }
    },
}, {timestamps: true});

module.exports = mongoose.model('Case', caseSchema);