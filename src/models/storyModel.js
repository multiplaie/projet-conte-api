const mongoose = require("mongoose");

const StoryModel = mongoose.model(
    "projet-conte",
    {
        title: {
            type: String,
            required: true
        },
        archive:{
            type: Date
        }
    },
    "story"
);

module.exports = {StoryModel}; 