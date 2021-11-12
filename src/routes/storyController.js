const express = require('express');
const router = express.Router();

const {StoryModel} = require('../models/storyModel');

router.get('/', (req, res) => {
    StoryModel.find((err, stories) => {
        if(!err) res.send(stories);
        else console.log('Error to get data:' + err);
    });
});

router.get('/:id', (req, res) => {
    
    console.log(req.params.id);
    StoryModel.findOne({_id: req.params.id}, (err, story) => {
        if(!err) res.send(story);
        else console.log('Error find story :' + err);
    });
});

router.post('/', (req, res) =>{
    console.log(req)
    const newStory = new StoryModel({
        title: req.body.title
    });

    newStory.save((err,story) => {
        if(!err) res.send(story);
        else console.log('Error creating new data : '+ err)
    });
});

router.delete('/:id', (req, res) =>{
    StoryModel.deleteOne({_id: req.params.id}, (err, story) => {
        if(!err) res.send(story);
        else console.log('Error find story :' + err);
    })
})

module.exports = router;