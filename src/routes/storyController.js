const express = require('express');
const router = express.Router();

const {StoryModel} = require('../models/storyModel');

router.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    StoryModel.find({archive: null},(err, stories) => {
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
        title: req.body.title,
        archive: null
    });

    newStory.save((err,story) => {
        if(!err) res.send(story);
        else console.log('Error creating new data : '+ err)
    });
});

router.delete('/:id', (req, res) =>{

    let storyToUpdate = {};
    StoryModel.findOne({_id: req.params.id}, (err, story) => {
        if(!err) {
            storyToUpdate = story;
            storyToUpdate.archive = Date.now();
            StoryModel.updateOne(
                {_id: req.params.id}, 
                storyToUpdate,
                (err, story) => {
                if(!err) res.send(storyToUpdate);
                else console.log('Error find story :' + err);
            })
        }
        else console.log('Error find story :' + err);
    });
    
})

module.exports = router;