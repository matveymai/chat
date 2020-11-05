const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = process.env.PORT || 3000

app.use('/css', express.static(__dirname + '/css'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('message', (msg) => io.emit('message', msg));
})



http.listen(PORT, () => {
    console.log('listening on port 3000...')
})