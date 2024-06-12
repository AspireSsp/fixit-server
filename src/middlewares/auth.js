
const jwt = require('jsonwebtoken');
const User = require('../models/userModels');

const authenticate = async (req, res, next) => {
    try {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new Error('No token found');
        }
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        const rootUser = await User.findOne({ _id: verifyToken._id });
        if (!rootUser) {
            throw new Error('User not found');
        }
        req.token = token;
        req.user = rootUser;
        req.userId = rootUser._id;
        next();
    } catch (error) {
        res.status(401).send({ message: "Unauthorized" });
    }
};

module.exports = authenticate;
