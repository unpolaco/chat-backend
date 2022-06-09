const express = require("express");
const config = require('./config/app')
const router = require('./router')
const cors = require('cors')
const app = express();
const http = require('http')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads'))

const port = config.appPort;

const server = http.createServer(app)
const SocketServer = require('./socket')
SocketServer(server)

server.listen(port, () => {
    console.log(`Running! on port ${port}`);
});
