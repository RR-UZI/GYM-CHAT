var express = require('express')
var socket = require('socket.io');


//App setup

var app = express();
<<<<<<< HEAD

const port = process.env.PORT || 4000;

var server = app.listen(port,function(){
=======
var server = app.listen(4000,function(){
>>>>>>> 5c3e886 (f)
    console.log('liseting to request on port 4000')
});


//Static file
app.use(express.static('public'));

// Socket setup

var io = socket(server);

io.on('connection', function(socket){
    console.log('made socket connection', socket.id)

    // Handle chat event
    socket.on('chat', function(data){
    // console.log(data);
        io.sockets.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });
    
    

});
