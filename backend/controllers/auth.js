const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// exports.currentUser = async (req, res) => {
//     // console.log(req.user.email);
//     User.findOne({email: req.user.email}).exec((err, user) => {
//         if (err) {
//             throw new Error(err);
//         } else {
//             res.json(user);
//         }
//     })
// };

exports.handleRegister = async (req, res) => {

    const { jobId, name, password, roles, court } = req.body;
    if (!jobId || !name || !password) return res.status(400).json({ 'message': 'JobID, name and password are required.' });


    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ jobId: jobId }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(password, 10);

        //create and store the new user
        const result = await User.create({
            jobId: jobId,
            name: name,
            password: hashedPwd,
            roles,
            court
        });

        // console.log(result);

        res.status(201).json({ 'success': `New user ${name} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

exports.handleLogin = async (req, res) => {
    const { jobId, password } = req.body;
    if (!jobId || !password) return res.status(400).json({ 'message': 'JobID and password are required.' });

    const foundUser = await User.findOne({ jobId: jobId }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized 
    
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "jobId": foundUser.jobId,
                    "name": foundUser.name,
                    "roles": roles,
                    "court": foundUser.court
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1d' }
        );
        const refreshToken = jwt.sign(
            { "jobId": foundUser.jobId },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        );
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();
        // console.log(result);
        // console.log(roles);

        // Creates Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
        // res.cookie('jwt', refreshToken, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        // Send authorization roles and access token to user
        res.json({ roles, accessToken });

    } else {
        res.sendStatus(401);
    }
}

exports.handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    // console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    // console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}

exports.handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    console.log("cookies -> ",cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    console.log(refreshToken);

    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.jobId !== decoded.jobId) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "jobId": decoded.jobId,
                        "name": foundUser.name,
                        "roles": roles,
                        "court": foundUser.court,
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
            res.json({ roles, accessToken })
        }
    );
}