const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
exports.authenticateUser = async(req, res, next) => {
    const token = req.header('Auhorization').replace('Bearer', '');

    if(!token){
        return res.status(401).json({ message: 'No token , authorization denied'})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();

    }catch(err){
        res.status(401).json({ message:'Token is not valid'})
    }
}