const RegisteredCase = require('../models/RegisteredCase')
const Court = require('../models/Court')
const Schedule = require('../models/Schedule')

exports.getSchedule = async (req, res) => {
    try {
        const {courtId} = req.body;
        const schedule = await Schedule.find({
            court: courtId
        })
        .populate('case')
        .populate('courtId')
        .sort('dateAndTime')
        .exec();

        res.status(200).json(schedule);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!')
    }
    
}

exports.schedulingAlgo = async (courtId) => {
    // TODO - Schedule cases of a particular court

    const cases = await RegisteredCase.find({
        courtId
    }).exec();

    if (cases.length <= 0) return;



    // input req

    // 1. last date of hearing / rigistration date
    // 2. last score (if heared)
    // 3. current date
    // 4. severity score
    // 5. track
    // 6. case _id
    // 7. court _id
    // 8. constFactor
    // 9. case statement
}


// --------------------> utility functions <---------------------------

const getTotalScore = (caseDate, currDate, prevScore, track, constFactor, statement) => {
    const date1 = new Date(caseDate);
    const date2 = new Date(currDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // 1. dateScore
    const dateScore = differenceInDays * constFactor;

    // 2. trackScore
    const trackScore = getTrackScore(track);

    // 3. severityScore
    const severityScore = getSeverityScore(statement);

    // totalScore
    const totalScore = prevScore + dateScore + trackScore + severityScore;

    return totalScore;
}

const getTrackScore = (track) => {
    switch (track) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        default:
            return 0;
    }
}

const getSeverityScore = (statement) => {
    // TODO - connect with python model to get severity score
    return 0;
}



