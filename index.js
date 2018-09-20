const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const mongooseConnection = require("./db/dbconnect").connection;

// Routers
require('./routers/routers')(app);

// Connection
require('./sockets/sockets')(io);

http.listen(8000, () => {
	console.log('Listening on *8000');
});
