const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username : {type:String, unique : true, required : true},
    password: {type: String, required: true},
    enrolledCourses : [{type : String}],
})

module.exports = mongoose.model('User', userSchema);
