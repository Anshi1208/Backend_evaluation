const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const courseRoutes = require('./src/routes/courseRoutes');
const userRoutes = require('./src/routes/userRoutes');
const errorHandler = require('./src/middleware/errorMiddleware');

dotenv.config();
const app = express();

//for middleware
app.use(morgan('combined'));
app.use(bodyParser.json());

//this is for routes

app.use('/api/courses', courseRoutes);
app.use('/api/users', userRoutes);


app.use(errorHandler)



mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
})
.then(() => console.log('MongoDB connceted'))
.catch(err => console.log(err))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runing on port {PORT}`));
