// #####################################################################

'use strict'
require('dotenv').config({ silent: true });

const express   = require('express');
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const PORT        = process.argv[2] || process.env.port || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'dist')));

server.listen(PORT, () => console.log('server here! listening on', PORT));

const io =require('socket.io').listen(server);
io.sockets.on('connection', (socket)=>{
  console.log('works');
  socket.on('you', (pingu) => {
  console.log('i hear the ping')
    // io.sockets.emit('msg', {msg: 'hi there fucker'});
      // console.log('works');
  // console.log(socket);
  }); // end of ping
}); // end of sockets.on.connect






//   }
//   io.sockets.on('disconnect', (socket)=>{
//     console.log('hate to see you leave!!!!')

//   });

// });
// io.sockets.on('ping', (socket)=>{
//       console.log('i hear the ping')
//     })


// const studentRouter = require('./routes/home');
const apiRouter  = require('./routes/api');
const teacherRouter  = require('./routes/teacher');
const userRouter = require('./routes/users')

// app.use('/', studentRouter);
app.use('/api', apiRouter);
app.use('/teacher', teacherRouter);
app.use('/users', userRouter)

