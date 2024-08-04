const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

//for middleware
app.use(morgan('combined'));
app.use(bodyParser.json());

//this is for routes