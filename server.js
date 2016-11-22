'use strict'
//require the dependencies needed for our app...express,morgan, and path
const express = require('express');
const logger  = require('morgan');
const path    = require('path');


const app     = express();
const PORT    = process.argv[2] || process.env.port || 3000;


app.use(logger('dev'));

//set up middleware routes use it
const homeRouter = require('./routes/home');
const apiRouter  = require('./routes/api');
app.use('/api', apiRouter);
app.use('/', homeRouter);

app.listen(PORT, () => console.log('server here! listening on', PORT));
