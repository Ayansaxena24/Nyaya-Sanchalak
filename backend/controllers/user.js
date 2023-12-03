const User = require('../models/User')

exports.getUsers = async (req, res) => {
    try {
        const response = await User.find({}).exec();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json('Internal server error')
    }
}