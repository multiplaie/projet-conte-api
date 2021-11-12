const mongoose = require("mongoose");

const StoryModel = mongoose.model(
    "projet-conte",
    {
        title: {
            type: String,
            required: true
        }
    },
    "story"
);

module.exports = {StoryModel}; 