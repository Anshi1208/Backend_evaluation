const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    id:{type: String, unique: true, required: true },
    title: {type: String, required:true},
    category:{type:String, required:true},
    diffculty:{type:String, required:true},
    description:{type:String, required:true},
})
const  Course = mongoose.model('Course', courseSchema);
module.exports = Course