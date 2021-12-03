#!/usr/bin/env node
const express = require('express');
const app = express();
require('./models/dbConfig');
const config = require("../config.json");
const storyController = require('./routes/storyController');
const chapterController = require('./routes/chapterController');
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE");
    next();
});
app.use('/api/story', storyController);
app.use('/api/chapter', chapterController);

app.listen(config.app.port, () => console.log('Server started: '+config.app.port));