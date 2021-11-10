const express = require('express');
const app = express();
require('./models/dbConfig');
const config = require("../config.json");


app.use(express.json())
app.listen(config.app.port, () => console.log('Server started: '+config.app.port));