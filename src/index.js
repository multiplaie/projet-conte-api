#!/usr/bin/env node
const express = require('express');
const app = express();
require('./models/dbConfig');
const config = require("../config.json");
const storyController = require('./routes/storyController');
const chapterController = require('./routes/chapterController');
const mediaController = require('./routes/mediaController');
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});
app.use('/api/story', storyController);
app.use('/api/chapter', chapterController);
app.use('/api/media', chapterController);

app.listen(config.app.port, () => console.log('Server started: '+config.app.port));