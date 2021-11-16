const express = require('express');
const router = express.Router();

const {ChapterModel} = require('../models/chapterModel');

router.get('/allActiveByStory/:story_id', (req, res) => {
    ChapterModel.find({archive: null, story: req.params.story_id},(err, chapter) => {
        if(!err) res.send(chapter);
        else console.log('Error to get data:' + err);
    });
});


router.get('/oneById/:id', (req, res) => {
    ChapterModel.findOne({ _id: req.params.id},(err, chapter) => {
        if(!err) res.send(chapter);
        else console.log('Error to get data:' + err);
    });
});


router.post('/', (req, res) =>{
    console.log(req)
    const newChapter = new ChapterModel({
        title: req.body.title,
        content: req.body.content,
        annotations: req.body.annotations,
        children: req.body.children,
        assets: req.body.assets,
        story: req.body.story,
        archive: null
    });
    newChapter.save((err,chapter) => {
        if(!err) res.send(chapter);
        else console.log('Error creating new data : '+ err)
    });
});


module.exports = router;