const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
//const logger = require('./middleware/logger');

//Load env vars
dotenv.config({ path: './config/config.env' });
//Connect to database
connectDB();

//Route Files
const bootcamps = require('./routes/bootcamp');

const app = express();
//Body Parser
app.use(express.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routes
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 6000;
app.listen(
  PORT,
  console.log(
    `Server running in:${process.env.NODE_ENV} mode on port:${PORT}`.yellow.bold
  )
);
