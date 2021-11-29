const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    narrative_element:{
        type: String,
        required: false
    },
    characters: {
        type: String,
        required: false
    },
    place: {
        type: String,
        required: false
    },
    pitch:{
        type: String,
        required: true
    },
    developpement:{
        type: String,
        required: false
    },
    archive:{
        type: Date
    }
});

const StoryModel = mongoose.model("story",schema, 'story');

module.exports = {StoryModel}; 