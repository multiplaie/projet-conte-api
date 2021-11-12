const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    annotations: {
        type: String,
        required: true
    },
    children: {
        type: Array
    },
    assets: {
        type: Array
    },
    story: {
        type: String,
        required: true
    },
    archive:{
        type: Date
    }
});

const ChapterModel = mongoose.model("chapter",schema, 'chapter');

module.exports = {ChapterModel}; 