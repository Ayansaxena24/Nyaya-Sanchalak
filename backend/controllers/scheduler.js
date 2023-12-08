<<<<<<< HEAD
const RegisteredCase = require("../models/RegisteredCase");
const Court = require("../models/Court");
const Schedule = require("../models/Schedule");

exports.getSchedule = async (req, res) => {
  try {
    const { courtId } = req.body;

    await schedulingAlgo(courtId);

    const schedule = await Schedule.findOne({
      court: courtId,
    })
      .populate("case")
      .populate("courtId")
      .sort("dateAndTime")
      .exec();

    res.status(200).json(schedule);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal server error!");
  }
};
=======
const schedule = require('node-schedule');

const RegisteredCase = require('../models/RegisteredCase')
const Court = require('../models/Court')
const Schedule = require('../models/Schedule')


// const interval = '0 0 */3 * *'; // every 3 days
// const interval = '0 */2 * * *';  // every 2 hrs
// const interval = '*/1 * * * *'; // Schedule interval (every 1 minute);
// const interval = '*/2 * * * * *'; // Schedule interval (every 2 seconds)
const interval = '0 0 * * *'; // Schedule interval (every day at midnight)
// const interval = '0 0 * * 0'; // Schedule interval (every week on Sunday at midnight)



exports.getSchedule = async (req, res) => {

    try {
        const { courtId } = req.body;

        // await schedulingAlgo(courtId);

        const schedule = await Schedule.findOne({
            court: courtId
        })
            .populate('cases.caseId')
            .populate('court')
            .sort('dateAndTime')
            .exec();

        res.status(200).json(schedule);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!')
    }

}
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

exports.removeSchedule = async (req, res) => {
    try {
        const { courtId } = req.body;

        const schedule = await Schedule.findOneAndDelete({
            court: courtId
        })
            .exec();

        res.status(200).json(schedule);
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!')
    }
}

exports.updateSchedule = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error!')
    }
}



// -----------------------------------------------------------------------------------------------------------------------------


// Schedule cases of a particular court
const schedulingAlgo = async (courtId) => {
<<<<<<< HEAD
  // TODO - Schedule cases of a particular court

  try {
    const cases = await RegisteredCase.find({
      courtId,
    }).exec();

    if (cases.length <= 0) {
      console.log("No cases found for scheduling.");
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
};

// --------------------> utility functions <---------------------------

// score
const assignScore = async (cases) => {
  try {
    for (const caseItem of cases) {
      const caseDate = caseItem.caseInfo.regDate;
      const currDate = new Date();
      const prevScore = caseItem.currScore;
      const track = getTrack();
      const constFactor = getConstFactor();
      const statement = caseItem.caseInfo.caseDesc;

      const currScore = getTotalScore(
        caseDate,
        currDate,
        prevScore,
        track,
        constFactor,
        statement
      );

      const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
        prevScore: prevScore,
        currScore: currScore,
      });
=======

    try {

        const existingSchedule = await Schedule.findOne({
            court: courtId
        }).exec();

        // Fetching new cases
        let newCases = await RegisteredCase.find({
            courtId,
            caseStatus: 'registered',
        }).exec();

        // Fetching pending cases
        let pendingCases = await RegisteredCase.find({
            courtId,
            caseStatus: 'pending',
        }).exec();

        // Assigining score to new cases
        newCases = await assignScore(newCases);

        // Re-assigining score to existing cases
        pendingCases = await reAssiginingScore(pendingCases);

        // Finding first 20 cases (fixed)
        let fixedCases = [];
        if (existingSchedule) {
            for (let i = 0; i < existingSchedule.cases.length && i < 20; i++) {
                fixedCases.push(existingSchedule.cases[i]);
            }
        }

    
        // Finding non fixed cases - (these are ready to re-schedule)
        let notFixedCases = pendingCases.filter(pendingCase => {
            // Check if there is no matching caseId in the fixedCases array
            return !fixedCases.some(fixedCase => fixedCase.caseId === pendingCase._id);
        });


        // 1. Make a single list of nonFixedCases & newCases
        // 2. Sort this list on the basis of score
        // 3. Assign slots to these sorted cases.
        // 4. From the schedule remove all the cases other than first 20
        // 5. Save these sorted cases slots to Schedule.



        
        // // Fetching all registered & pending cases
        // const cases = await RegisteredCase.find({
        //     courtId,
        //     // caseStatus: 'pending',
        //     caseStatus: { $in: ['pending', 'registered'] }
        // }).exec();

        // if (cases.length <= 0) {
        //     console.log('No cases found for scheduling.');
        //     return;
        // }

        // await assignScore(cases);
        // await scheduleCases(courtId, cases);

    } catch (error) {
        console.log(error);
    }

}

// --------------------> utility functions <---------------------------



// Calculate & assign score to new cases
const assignScore = async (cases) => {
    try {
        for (const caseItem of cases) {
            const caseDate = caseItem.caseInfo.regDate;
            const currDate = new Date();
            const track = getTrack();
            const constFactor = getConstFactor();
            const statement = caseItem.caseInfo.caseDesc;

            // 1. dateScore
            const dateScore = getDateScore(caseDate, currDate, constFactor);

            // 2. trackScore
            const trackScore = getTrackScore(track);

            // 3. severityScore
            const severityScore = getSeverityScore(statement);

            const totalScore = dateScore+trackScore+severityScore;

            caseItem.score = totalScore;

            const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
                score: totalScore,
            }).exec();
        }

        return cases;
    } catch (error) {
        console.log(error);
    }
}

// Re-calculating score for existing cases
const reAssiginingScore = async (cases) => {
    try {
        for (const caseItem of cases) {
            const caseDate = caseItem.caseInfo.regDate;
            const currDate = new Date();
            const constFactor = getConstFactor();
            // 1. dateScore
            const dateScore = getDateScore(caseDate, currDate, constFactor);

            // 2. prevScore
            const prevScore = caseItem.score;

            const totalScore = dateScore+prevScore;

            caseItem.score = totalScore;

            const result = await RegisteredCase.findByIdAndUpdate(caseItem._id, {
                score: totalScore,
            }).exec();
        }

        return cases;
    } catch (error) {
        console.log(error);
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec
    }
  } catch (error) {
    console.log(error);
  }
};

const getTotalScore = (
  caseDate,
  currDate,
  // prevScore,
  track,
  // constFactor,
  statement
) => {
  // 1. dateScore
  const dateScore = getDateScore(caseDate, currDate, constFactor);

  // 2. trackScore
  const trackScore = getTrackScore(track);

  // 3. severityScore
  const severityScore = getSeverityScore(statement);

  // 4. judgeScore
  const judgeScore = getJudgeScore();

  // 5. agingScore
  // const agingScore = getAgingScore();

<<<<<<< HEAD
  // totalScore
  const totalScore = scoreCaluclateByTime;
  trackScore + severityScore + judgeScore;
  // agingScore;
=======
    // 5. agingScore
    // const agingScore = getAgingScore();
    const agingScore = 0;
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

  // Prev score ko hatana padsakta hai verna high priority hamesha hi high pe rahega last score add up hoga isliye

  return totalScore;
};

const url = "/cases";

const fetchDataeScore = async () => {
  try {
    const response = await fetch(url);
    const cases = response.data;

    cases.forEach((caseData) => {
      const caseId = caseData.caseId;
      const dateOfFile = caseData.dateOfFile;
      const currentDate = new Date();

      const monthsDifference =
        (currentDate.getFullYear() - dateOfFile.getFullYear()) * 12 +
        (currentDate.getMonth() - dateOfFile.getMonth());

      const yearsDifference = Math.floor(monthsDifference / 12);
      const scoregenerated = monthsDifference * 1 + yearsDifference * 2;

      //
      return scoregenerated;
    });
  } catch (error) {
    console.log(error);
  }

  // Yaha se scoregenerated return krva denge
};

const scoreCaluclateByTime = fetchDataeScore();

// const getDateScore = (caseDate, currDate, constFactor) => {
//   const date1 = new Date(caseDate);
//   const date2 = new Date(currDate);
//   const differenceInMs = Math.abs(date2 - date1);
//   const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

//   // dateScore
//   const dateScore = differenceInDays * constFactor;

//   return dateScore;
// };

const getTrackScore = (track) => {
  switch (track) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 5;
    default:
      return 0;
  }
};


// TODO
const getSeverityScore = (statement) => {
<<<<<<< HEAD
  // TODO - connect with python model to get severity score
  return 0;
};
=======
    // TODO - connect with python model to get severity score
    return 5;
}
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec


// TODO
const getJudgeScore = () => {
<<<<<<< HEAD
  // TODO - decide the score if judge will sort the cases

  // Yaha pe ek factor database mai dalna padega ki if judge factor= then only return 999 verna return 0

  return 999;
};
=======
    // TODO - decide the score if judge will sort the cases
    return 0;
}
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

const getAgingScore = () => {
  return 5;
};

// const getConstFactor = () => {
//   return 2;
// };

const getTrack = () => {
  return 1;
};

// time schedule
const scheduleCases = async (courtId, cases) => {
<<<<<<< HEAD
  try {
    // Sort cases by priority score (higher score means higher priority)
    cases.sort((a, b) => b.score - a.score);
=======
    try {

        // Sort cases by priority score (higher score means higher priority)
        cases.sort((a, b) => b.currScore - a.currScore);

        // // Find the court's schedule or create a new one if not exists
        // let schedule = await Schedule.findOne({ court: courtId }).exec();
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

    // // Find the court's schedule or create a new one if not exists
    // let schedule = await Schedule.findOne({ court: courtId }).exec();

<<<<<<< HEAD
    // if (!schedule) {
    //     schedule = new Schedule({ court: courtId, cases: [] });
    // }
=======
        // Find the court's schedule delete it.
        // let schedule = await Schedule.findOneAndDelete({ court: courtId }).exec();



        let schedule = new Schedule({ court: courtId, cases: [] });


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
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

    // Find the court's schedule delete it.
    let schedule = await Schedule.findOneAndDelete({ court: courtId }).exec();
    schedule = new Schedule({ court: courtId, cases: [] });

    // Iterate over the sorted cases and schedule them
    for (const caseItem of cases) {
      const dateAndTime = assignTimeSlots(schedule);

      if (dateAndTime) {
        schedule.cases.push({ caseId: caseItem._id, dateAndTime });
      } else {
        console.log(
          `Could not schedule case ${caseItem._id}. No available slots.`
        );
      }
    }

<<<<<<< HEAD
    // Update or create the schedule in the database
    const result = await schedule.save();
    console.log(`Schedule updated for court ${courtId}.`);
    console.log("schedule -> ", result);
  } catch (error) {
    console.log(error);
  }
};
=======
}
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

const assignTimeSlots = (schedule) => {
  // Get all the existing cases in the schedule
  const existingCases = schedule.cases;

<<<<<<< HEAD
  // Specify the duration needed for each case (in milliseconds)
  const caseDuration = 1000 * 60 * 60 * 2; // Assuming each case takes 2 hours
=======
    // Specify the duration needed for each case (in milliseconds)
    // const caseDuration = 1000 * 60 * 60 * 2; // Assuming each case takes 2 hours
    const caseDuration = 1000 * 60 * 60 * 2; // Assuming each case takes 1 hours
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

  // Specify the start and end time for scheduling cases (11:00 AM - 4:00 PM)
  const startTimeRange = 11;
  const endTimeRange = 16;

  // Sort the existing cases by dateAndTime
  existingCases.sort((a, b) => a.dateAndTime - b.dateAndTime);

<<<<<<< HEAD
  // Calculate the start time for scheduling three days before the current date
  const today = new Date();
  const startTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 3,
    startTimeRange
  );
=======
    // Calculate the start time for scheduling three days before the current date
    const today = new Date();
    const startTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3, startTimeRange, 0, 0);

    console.log(startTime.getUTCDate());
    const localStartTime = startTime.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    console.log(localStartTime + ", ");
    // console.log(startTime);
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

  // Find the last scheduled case
  const lastCase =
    existingCases.length > 0 ? existingCases[existingCases.length - 1] : null;

  // If there are no existing cases or the last case is more than three days ago, schedule the new case at the calculated start time
  if (!lastCase || lastCase.dateAndTime < startTime) {
    return startTime;
  }

  const lastCaseDateAndTimeObj = new Date(lastCase.dateAndTime);
  // Calculate the start time of the new case (after the last case)
  // const nextStartTime = lastCase.dateAndTime.getTime() + caseDuration;
  const nextStartTime = lastCaseDateAndTimeObj.getTime() + caseDuration;

<<<<<<< HEAD
  // Check if the new case can be scheduled on the same day within the specified time range
  if (
    // startTime.getDate() === lastCase.dateAndTime.getDate() &&
    startTime.getDate() === lastCaseDateAndTimeObj.getDate() &&
    nextStartTime.getHours() >= startTimeRange &&
    nextStartTime.getHours() < endTimeRange
  ) {
    // Return the start time as a Date object for the same day
    return new Date(nextStartTime);
  }
  // Hello World
=======
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
>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec

  // If the new case needs to be scheduled on the next day, set the time to the start of the next day
  const nextDayStartTime = new Date(
    startTime.getFullYear(),
    startTime.getMonth(),
    startTime.getDate() + 1,
    startTimeRange
  );

  return nextDayStartTime;
};

<<<<<<< HEAD
// Using map fucntion to get
=======

const createAndUpdateSchedules = async () => {
    const allCourts = await Court.find({}).select('_id');

    for (const court of allCourts) {
        await schedulingAlgo(court._id);
    }


}

// Schedule the function to run at the specified interval
schedule.scheduleJob(interval, createAndUpdateSchedules);



>>>>>>> f69ab88dff91430e8b61a284af735c51546942ec
