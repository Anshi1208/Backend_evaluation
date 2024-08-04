const express = require('express');
const { getCourses } = require('../controllers/courseController');
const { authenticateUser } = ('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getCourses);

route.post('/enroll', authenticateUser, enrollCourse);
router.post('/cancel-enrollment', authenticateUser, cancelEnrollment);
router.get('/my-courses',authenticateUser, getEnrolledCourses);

module.exports = router;