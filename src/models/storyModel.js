const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    archive:{
        type: Date
    }
});

const StoryModel = mongoose.model("story",schema, 'story');

module.exports = {StoryModel}; 