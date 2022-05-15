const express = require("express");
const config = require('./config/app')
const router = require('./router')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(router)

const port = config.appPort;
app.listen(port, () => {
    console.log(`Running! on port ${port}`);
});