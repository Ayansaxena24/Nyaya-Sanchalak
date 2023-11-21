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

    try {
        const cases = await RegisteredCase.find({
            courtId
        }).exec();
    
        if (cases.length <= 0) {
            console.log('No cases found for scheduling.');
            return;
        }

        assignScore(cases);
        scheduleCases(courtId, cases);

    } catch (error) {
        console.log(error);
    }

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
    // 10. Judge sorting score
    // 11. Aging score (for removing starvation)
}


// --------------------> utility functions <---------------------------



// score
const assignScore = async (cases) => {
    try {
        for (const caseItem of cases) {
            const caseDate = caseItem.caseInfo.regDate;
            const currDate = new Date.now();
            const prevScore = caseItem.currScore; 
            const track = getTrack();
            const constFactor = getConstFactor();
            const statement = caseItem.caseInfo.regDate.caseDesc;
    
            const currScore = getTotalScore(caseDate, currDate, prevScore, track, constFactor, statement);
    
            const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
                prevScore: prevScore,
                currScore: currScore,
            })
        }
    } catch (error) {
        console.log(error);
    }
}

const getTotalScore = (caseDate, currDate, prevScore, track, constFactor, statement) => {

    // 1. dateScore
    const dateScore = getDateScore(caseDate, currDate, constFactor);

    // 2. trackScore
    const trackScore = getTrackScore(track);

    // 3. severityScore
    const severityScore = getSeverityScore(statement);

    // 4. judgeScore
    const judgeScore = getJudgeScore();

    // 5. agingScore
    const agingScore = getAgingScore();

    // totalScore
    const totalScore = prevScore + dateScore + trackScore + severityScore + judgeScore + agingScore;

    return totalScore;
}

const getDateScore = (caseDate, currDate, constFactor) => {
    const date1 = new Date(caseDate);
    const date2 = new Date(currDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // dateScore
    const dateScore = differenceInDays * constFactor;

    return dateScore;
}

const getTrackScore = (track) => {
    switch (track) {
        case 1:
            return 10;
        case 2:
            return 3;
        case 3:
            return 1;
        default:
            return 0;
    }
}

const getSeverityScore = (statement) => {
    // TODO - connect with python model to get severity score
    return 0;
}

const getJudgeScore = () => {
    // TODO - decide the score if judge will sort the cases
    return 999;
}

const getAgingScore = () => {
    return 5;
}

const getConstFactor = () => {
    return 2;
}

const getTrack = () => {
    return 1;
}


// time schedule
const scheduleCases = async (courtId, cases) => {
    try {
        
        // Sort cases by priority score (higher score means higher priority)
        cases.sort((a, b) => b.score - a.score);
    
        // // Find the court's schedule or create a new one if not exists
        // let schedule = await Schedule.findOne({ court: courtId }).exec();

        // if (!schedule) {
        //     schedule = new Schedule({ court: courtId, cases: [] });
        // }

        // Find the court's schedule delete it.
        let schedule = await Schedule.findOneAndDelete({ court: courtId }).exec();
        schedule = new Schedule({ court: courtId, cases: [] });
        
    
        // Iterate over the sorted cases and schedule them
        for (const caseItem of cases) {
            const dateAndTime = assignTimeSlots(schedule);
    
            if (dateAndTime) {
                schedule.cases.push({ caseId: caseItem._id, dateAndTime });
            } else {
                console.log(`Could not schedule case ${caseItem._id}. No available slots.`);
            }
        }
    
        // Update or create the schedule in the database
        const result = await schedule.save();
        console.log(`Schedule updated for court ${courtId}.`);
        console.log('schedule -> ', result);

    } catch (error) {
        console.log(error);
    }
    
}

const assignTimeSlots = (schedule) => {
    // Get all the existing cases in the schedule
    const existingCases = schedule.cases;

    // Specify the duration needed for each case (in milliseconds)
    const caseDuration = 1000 * 60 * 60 * 2; // Assuming each case takes 2 hours

    // Specify the start and end time for scheduling cases (11:00 AM - 4:00 PM)
    const startTimeRange = 11;
    const endTimeRange = 16;

    // Sort the existing cases by dateAndTime
    existingCases.sort((a, b) => a.dateAndTime - b.dateAndTime);

    // Calculate the start time for scheduling three days before the current date
    const today = new Date();
    const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3, startTimeRange);

    // Find the last scheduled case
    const lastCase = existingCases.length > 0 ? existingCases[existingCases.length - 1] : null;

    // If there are no existing cases or the last case is more than three days ago, schedule the new case at the calculated start time
    if (!lastCase || lastCase.dateAndTime < startTime) {
        return startTime;
    }

    // Calculate the start time of the new case (after the last case)
    const nextStartTime = lastCase.dateAndTime.getTime() + caseDuration;

    // Check if the new case can be scheduled on the same day within the specified time range
    if (
        startTime.getDate() === lastCase.dateAndTime.getDate() &&
        nextStartTime.getHours() >= startTimeRange &&
        nextStartTime.getHours() < endTimeRange
    ) {
        // Return the start time as a Date object for the same day
        return new Date(nextStartTime);
    }

    // If the new case needs to be scheduled on the next day, set the time to the start of the next day
    const nextDayStartTime = new Date(
        startTime.getFullYear(),
        startTime.getMonth(),
        startTime.getDate() + 1,
        startTimeRange
    );

    return nextDayStartTime;
}



