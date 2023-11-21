const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const caseTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['civil', 'criminal'],
        required: [true, 'case type is required!'],
        unique: [true, 'case type name must be unique!'],
    }
}, {timestamps: true});

module.exports = mongoose.model('CaseType', caseTypeSchema);