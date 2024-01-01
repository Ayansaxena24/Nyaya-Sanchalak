const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const scheduleSchema = new mongoose.Schema({
    cases: [
        {
            caseId: {
                type: ObjectId,
                ref: 'RegisteredCase',
                required: [true, 'case _id is required!']
            },
            dateAndTime: {
                type: Date,
                required: [true, "case's date and time is required!"],
            },
        }  
    ],
    
    judge: {
        type: ObjectId,
        ref: 'User',
        // required: [true, "judge _id is required!"],
    },
    court: {
        type: ObjectId,
        ref: 'Court',
        required: [true, "court _id is required!"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Schedule', scheduleSchema);