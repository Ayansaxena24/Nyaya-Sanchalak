const uniqid = require('uniqid')

const User = require('../models/User');
const FiledCase = require('../models/FiledCase');
const RegisteredCase = require('../models/RegisteredCase');
const {stateMap, trackMap} = require('../constants/index');
const Court = require('../models/Court');


// ----------------------------------- File case -------------------------------------------

// read all
exports.getAllFiledCases = async (req, res) => {

}

// read one
exports.getFiledCase = async (req, res) => {
    try {
        const caseId = req.params.caseId;
        // console.log(caseId);

        const result = await FiledCase.findById(caseId).exec();

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
        const {category, caseType, plaintiffDetails, defendantDetails, valuation, amount, filingDate, filingTime, prayer, reliefClaimed, causeOfAction, act1, actSection1, causeOfActionDate, courtId} = req.body;
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
        const {data, _id} = req.body;
        const response = await FiledCase.findByIdAndUpdate(_id, data, {new: true}).exec();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

// delete
exports.removeFiledCase = async (req, res) => {
    try {
        const {_id} = req.body;
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
        const {filingNum, petitioner, respondent, extraInfo, actSection, policeStation, extraParty, caseDetails, registration, caseInfo, caseStatus, caseHearing, courtId, score, finalArgument, evidence, category} = req.body;
        const date = new Date();
        // const caseHistory = [
        //     {
        //         status: 'registered',
        //         date: date,
        //         court: courtId,
        //     }
        // ]

        const filedCase = await FiledCase.find()

        const track = trackMap.get(caseInfo.caseType);

        const response = await RegisteredCase.create({
            petitioner, respondent, extraInfo, actSection, policeStation, extraParty, caseDetails, registration, caseInfo, courtId,
            caseStatus, caseHearing, score, track, finalArgument, evidence, category
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

exports.updateRegisteredCase = async (req, res) => {
    try {
        const {data, _id} = req.body;
        const response = await RegisteredCase.findByIdAndUpdate(_id, data, {new: true}).exec();
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error!")
    }
}

exports.removeRegisteredCase = async (req, res) => {
    try {
        const {_id} = req.body;
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

