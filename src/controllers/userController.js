const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
    const { userName, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    const toekn = jwt.sign({ id:user._id}, process.env.JWT_SECRET);
    res.json({ toekn });
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne( { username });
    if(!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json( {message : 'Invalid credentials'});

    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json( { token })
}