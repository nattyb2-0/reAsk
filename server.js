// #####################################################################

'use strict'
require('dotenv').config({ silent: true });

const express     = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser')

const app         = express();
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')));

app.listen(PORT, () => console.log('server here! listening on', PORT));

// #####################################################################

// const studentRouter = require('./routes/home');
const apiRouter  = require('./routes/api');
const teacherRouter  = require('./routes/teacher');
const userRouter = require('./routes/users')

// app.use('/', studentRouter);
app.use('/api', apiRouter);
app.use('/teacher', teacherRouter);
app.use('/users', userRouter)

