const User = require('../models/User');
const FiledCase = require('../models/FiledCase');
const RegisteredCase = require('../models/RegisteredCase');

// ----------------------------------- File case -------------------------------------------

// read all
exports.getAllFiledCases = async (req, res) => {

}

// read one
exports.getFiledCase = async (req, res) => {
    

}

// create
exports.fileCase = async (req, res) => {
    try {
        const data = req.body;
        const response = await FiledCase.create(data);
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to file case."
        })
    }
}

// update
exports.updateFiledCase = async (req, res) => {
    try {
        const {data, _id} = req.body;
        const response = await FiledCase.findByIdAndUpdate(_id, data, {new: true}).exec();
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to update filed case."
        })
    }
}

// delete
exports.removeFiledCase = async (req, res) => {
    try {
        const {_id} = req.body;
        const response = await FiledCase.findByIdAndRemove(_id).exec();
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to remove filed case."
        })
    }
}


// ----------------------------------- Register case -------------------------------------------


exports.savePetitioner = async (req, res) => {
    
}

exports.saveRespondent = async (req, res) => {

}

exports.saveExtraInfo = async (req, res) => {

}

exports.saveActSection = async (req, res) => {

}

exports.savePoliceStation = async (req, res) => {

}

exports.saveExtraParty = async (req, res) => {

}

exports.saveCaseDetails = async (req, res) => {

}

exports.registerCase = async (req, res) => {
    try {
        const data = req.body;
        const response = await RegisteredCase.create(data);
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to register case."
        })
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
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to update registered case."
        })
    }
}

exports.removeRegisteredCase = async (req, res) => {
    try {
        const {_id} = req.body;
        const response = await RegisteredCase.findByIdAndDelete(_id).exec();
        res.status(200).json({
            success: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            response: "Failed to remove registered case."
        })
    }
}

// ----------------------------------- [] -------------------------------------------
// ----------------------------------- [] -------------------------------------------
// ----------------------------------- [] -------------------------------------------

