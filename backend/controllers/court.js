const Court = require('../models/Court');

exports.getCourt = async (req, res) => {
    try {
        const response = await Court.findById(req.params.courtId).exec();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

exports.removeCourt = async (req, res) => {
    try {
        const response = await Court.findByIdAndDelete(req.params.courtId).exec();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}

exports.addCourt = async (req, res) => {
    try {
        const {courtInfo, name, location, images} = req.body;
        const response = await Court.create({
            courtInfo, name, location, images
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}