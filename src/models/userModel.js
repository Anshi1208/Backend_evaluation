const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new mongoose.Schema({
    username : {type:String, unique : true, required : true},
    password: {type: String, required: true},
    enrolledCourses : [{type : String}],
})
userSchema.pre('save', async function (next){
    if(!this.isModified('password')){
        return next()
    }
    this.password = await bcrypt.hash(this.password, 10);
    next()
});
const User = mongoosoe.model('User', userSchema);
module.exports = User;