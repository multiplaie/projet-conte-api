const express = require('express');
const app = express();
require('./models/dbConfig');
const config = require("../config.json");
const storyController = require('./routes/storyController');

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api/story', storyController);
app.listen(config.app.port, () => console.log('Server started: '+config.app.port));