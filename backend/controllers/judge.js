const RegisteredCase = require('../models/RegisteredCase');
const Schedule = require('../models/Schedule');

exports.changeStatus = async (req, res) => {
    const { stage, caseId } = req.body;

    const status = stage === 'Judgment' ? 'closed' : 'pending';

    const currDate = new Date();

    const caseHearingObj = {
        date: currDate,
    }

    RegisteredCase.findByIdAndUpdate(caseId, {
        caseStage: stage,
        caseStatus: status,
        $push: {
            caseHearing: { $each: [caseHearingObj] }
        }
    })
}

exports.assignNewDateToCase = async (req, res) => {
    try {
        const { newDate, reason, caseId, courtId, oldDate } = req.body;

        const date1 = new Date(oldDate);
        const date2 = new Date(newDate);

        const date1Milliseconds = date1.getTime();
        const date2Milliseconds = date2.getTime();

        // Calculate the difference in milliseconds
        const differenceMilliseconds = Math.abs(date2Milliseconds - date1Milliseconds);

        // Convert the difference back to days
        let daysDifference = differenceMilliseconds / (1000 * 60 * 60 * 24);

        daysDifference = Math.floor(daysDifference);

        if (daysDifference > 7) {
            res.status(200).json("Judge can't select date having more or less than 7 years of date difference");
        }

        const schedule = await Schedule.findOne({
            court: courtId
        }).exec();

        // console.log(schedule);

        const indexOfObject = schedule.cases.findIndex(sch => sch.caseId === caseId);

        // const indexOfObject = schedule.cases.findIndex(sch => sch.caseId === caseId);
        // console.log(indexOfObject);
        // console.log(schedule.cases);
      
        // const foundObject = schedule.cases.find(collection => collection.caseId === caseId);
        
        console.log(foundObject);
        

        if (indexOfObject !== -1) {
            schedule[indexOfObject].dateAndTime = newDate;
            schedule.cases.sort((a, b) => a.dateAndTime - b.dateAndTime);
            res.status(200).json("Successfully changed date");
        } else {
            res.status(500).json("Internal server error!");
        }


    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!");
    }
}

exports.aproveDailySchedule = async (req, res) => {
    const {courtId} = req.body;
    const date = new Date();

    const schedule =  await Schedule.findOne({
        court: courtId
    }).exec();

    const cases = schedule.cases.filter(item => item.dateAndTime === date);

    const advocates = [];

    for (const caseItem of cases) {
        
    }


}