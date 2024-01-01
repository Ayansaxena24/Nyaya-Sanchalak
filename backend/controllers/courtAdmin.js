const uniqid = require('uniqid')

const User = require('../models/User');
const FiledCase = require('../models/FiledCase');
const RegisteredCase = require('../models/RegisteredCase');
const { stateMap, trackMap } = require('../constants/index');
const Court = require('../models/Court');
const Schedule = require('../models/Schedule');


// ----------------------------------- File case -------------------------------------------

// read all
exports.getAllFiledCases = async (req, res) => {

}

// read one
exports.getFiledCase = async (req, res) => {
    try {
        const { filingNum } = req.body;
        console.log(filingNum);

        const result = await FiledCase.findOne({
            filingNum: filingNum
        }).exec();

        res.status(200).json(result);

    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!");
    }

}

// create
exports.fileCase = async (req, res) => {
    try {
        // const data = req.body;
        // const response = await FiledCase.create(data);
        const { category, caseType, plaintiffDetails, defendantDetails, valuation, amount, filingDate, filingTime, prayer, reliefClaimed, causeOfAction, act1, actSection1, causeOfActionDate, courtId } = req.body;
        const court = await Court.findById(courtId).exec();

        const state = court ? court.location.state : 'Uttar Pradesh';



        const date = new Date(filingDate);



        // TODO --
        const districtCode = stateMap.get(state);

        const establishmentCode = 'LL05'
        const caseFilingNum = uniqid();
        const yearOfCaseFiling = date.getFullYear();

        const digit_8_randomNumber = Math.floor(Math.random() * 90000000) + 10000000;
        const digit_5_randomNumber = Math.floor(Math.random() * 90000) + 10000;

        // let filingNum = 'RCC' + '/' + caseFilingNum + '/' + yearOfCaseFiling
        // let cnrNum = districtCode + '09' + establishmentCode + '-' + caseFilingNum + '-' + yearOfCaseFiling;
        let filingNum = digit_5_randomNumber + '/' + yearOfCaseFiling
        let cnrNum = districtCode + '09' + digit_8_randomNumber + yearOfCaseFiling;


        const response = await FiledCase.create({
            category, caseType, plaintiffDetails, defendantDetails, valuation, amount, filingDate, filingTime, prayer, reliefClaimed, causeOfAction, act1, actSection1, causeOfActionDate, filingNum, cnrNum
        });
        res.status(200).json({
            'filingNumber': response.filingNum,
            'cnrNumber': cnrNum
        });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

// update
exports.updateFiledCase = async (req, res) => {
    try {
        const { data, _id } = req.body;
        const response = await FiledCase.findByIdAndUpdate(_id, data, { new: true }).exec();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

// delete
exports.removeFiledCase = async (req, res) => {
    try {
        const { _id } = req.body;
        const response = await FiledCase.findByIdAndRemove(_id).exec();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error")
    }
}


// ----------------------------------- Register case -------------------------------------------


exports.registerCase = async (req, res) => {
    try {
        const { petitioner, respondent, extraInfo, actSection, policeStation, extraParty, caseDetails, registration, caseInfo, caseStatus, courtId, finalArgument, evidence, category } = req.body;
        const regDate = new Date();
        const caseHearing = [
            {
                status: 'not heard',
                date: regDate,
                court: courtId,
            }
        ]

        const filingDate = new Date(caseInfo.filingDate);

        const caseNum = Math.floor(Math.random() * 900) + 100;
        const regNum = caseNum + '' + filingDate.getFullYear();

        caseInfo.caseNum = caseNum;
        caseInfo.regNum = regNum;
        caseInfo.regDate = regDate;

        const track = trackMap.get(caseInfo.caseType);

        const response = await RegisteredCase.create({
            petitioner, respondent, extraInfo, actSection, policeStation, extraParty, caseDetails, registration, caseInfo,
            caseStatus, caseHearing, courtId, track, finalArgument, evidence, category
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

// -->

exports.getAllRegisteredCases = async (req, res) => {

}

exports.getRegisteredCase = async (req, res) => {


}

exports.removeRegisteredCase = async (req, res) => {
    try {
        const { _id } = req.body;
        const response = await RegisteredCase.findByIdAndDelete(_id).exec();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

// ----------------------------------- [] -------------------------------------------
// ----------------------------------- [] -------------------------------------------
// ----------------------------------- [] -------------------------------------------



exports.updateCriminalCase = async (req, res) => {
    try {
        const { caseDesc, actSection, caseId, courtId } = req.body;

        const date = new Date();
        const result = await RegisteredCase.findByIdAndUpdate(caseId, {
            'caseDetails.info': caseDesc,
            // actSection: actSection,
            $push: {
                actSection: { $each: [actSection] },
                caseHearing: { $each: [{ date, courtId }] }
            },

        }).exec();

        res.status(200).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!')
    }
}

exports.updateCivilCase = async (req, res) => {
    try {
        const { caseDesc, caseId } = req.body;
        const result = RegisteredCase.findByIdAndUpdate(caseId, {
            'caseDetails.info': caseDesc
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!');
    }
}

 exports.updateDailySchedule = async (req, res) => {
    try {
        const {cases, judge, courtId, scheduleId} = req.body;

        // const deletedSchedule = await Schedule.findByIdAndDelete(scheduleId).exec();

        const updatedSchedule = await Schedule.findByIdAndUpdate(scheduleId, {
            cases
        }, {new: true})

        res.status(200).json(updatedSchedule);

        // const schedule = new Schedule({
        //     cases: cases,
        //     court: courtId,
        // })

        // for (const caseItem of cases) {
        //     const dateAndTime = assignTimeSlots(schedule);
        //     if (dateAndTime) {
        //         schedule.cases.push({ caseId: caseItem._id, dateAndTime });
        //     } else {
        //         console.log(`Could not schedule case ${caseItem._id}. No available slots.`);
        //     }
        // }

        // await schedule.save();

        // const result = await Schedule.findByIdAndUpdate(scheduleId, {
        //     cases: cases,
        //     judge: judge,

        // })
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
 }

 const assignTimeSlots = (schedule) => {
    // Specify the duration needed for each case (in milliseconds)
    // const caseDuration = 1000 * 60 * 60 * 2; // Assuming each case takes 2 hours
    const caseDuration = 1000 * 60 * 60 * 1; // Assuming each case takes 1 hours

    // Specify the start and end time for scheduling cases (11:00 AM - 4:00 PM)
    const startTimeRange = 11;
    const endTimeRange = 16;

    // Sort the existing cases by dateAndTime
    // existingCases.sort((a, b) => a.dateAndTime - b.dateAndTime);

    // Calculate the start time for scheduling three days before the current date
    const today = new Date();
    const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3, startTimeRange, 0, 0);

    if (startTime.getDay() === 0) { // Sunday
        // Adjust the start time to the next available day (Monday)
        startTime.setDate(startTime.getDate() + 1);
        startTime.setHours(startTimeRange);
    }

    // console.log(startTime.getUTCDate());
    const localStartTime = startTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    // console.log('localStartTime', localStartTime + '-');
    // console.log(startTime);

    // Find the last scheduled case
    const lastCase = existingCases.length > 0 ? existingCases[existingCases.length - 1] : null;

    // If there are no existing cases or the last case is more than three days ago, schedule the new case at the calculated start time
    if (!lastCase || lastCase.dateAndTime < startTime) {
        return startTime;
    }


    const lastCaseDateAndTimeObj = new Date(lastCase.dateAndTime);
    // Calculate the start time of the new case (after the last case)

    // const nextStartTime = lastCase.dateAndTime.getTime() + caseDuration;
    const nextStartTime = lastCaseDateAndTimeObj.getTime() + caseDuration;
    const nextStartTimeDateObj = new Date(nextStartTime);

    // Check if the new case can be scheduled on the same day within the specified time range
    if (
        // startTime.getDate() === lastCase.dateAndTime.getDate() &&

        startTime.getDate() === lastCaseDateAndTimeObj.getDate() &&
        // nextStartTime.getHours() >= startTimeRange &&
        // nextStartTime.getHours() < endTimeRange

        nextStartTimeDateObj.getHours() >= startTimeRange &&
        nextStartTimeDateObj.getHours() < endTimeRange
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