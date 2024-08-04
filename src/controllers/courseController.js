const Course = require('../models/courseModel');
const User = require('../models/userModel');

exports.getCourses = async (req, res) => {
   try {
        const { page = 1 , limit = 10, category, diffculty } = req.query;
        const filter = {};
        if(category) filter.category = category;
        if(diffculty) filter.diffculty = diffculty;
        const courses = await Course.find(filter)
        .skip((page-1) * limit)
        .limit(Number(limit));
        res.json(courses);
   } catch (error){
    res.status(500).json({ message: error.message})
   }

}
exports.enrollCourse = async (req, res) => {
    console.log('enrollcourse is called')
   try{
    const { courseId } = req.body;
    const userId = req.user.id;
    const user = await User.findById(userId);
    user.enrolledCourses.push(courseId);
    await user.save();

    res.json({ message: 'enrollment successfull'})
   } catch (error){
    res.status(500).json({message:error.message})
   }
}

exports.cancelEnrollment = async (req, res) => {
    try{
        const {courseId} =  req.body;
        const userId = req.user.id;
        const user = await User.findBy(userId);
        user.enrolledCourses = user.enrolledCourses.filter(id => id !== courseId);
        await user.save();
        res.json({message : 'Enrolmentcancelled'})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

exports.getEnrolledCourses = async (req, res) => {
   try{
    const userId = req.user.id;
    const user = await User.findBy(userId).populate('enrolledCourses');
    res.json(user.enrolledCourses)
   } catch(error){
        res.status(500).json({message : error.message})
   }
}