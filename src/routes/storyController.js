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

router.get('/OneById/:id', (req, res) => {
    
    console.log(req.params.id);
    StoryModel.findOne({_id: req.params.id}, (err, story) => {
        if(!err) res.send(story);
        else console.log('Error find story :' + err);
    });
});

router.post('/', (req, res) =>{
    if (req.body._id){
        StoryModel.updateOne(
            {_id: req.body._id},
            req.body,
            (err, changes) => {
                if(!err) res.send(req.body)
                else console.log('Error find story :' + err)
            }
        )
    }else{
        const newStory = new StoryModel({
            title: req.body.title,
            narrative_element: req.body.narrative_element,
            characters: req.body.characters,
            place: req.body.place,
            pitch: req.body.pitch,
            developpement: req.body.developpement,
            archive: null
        });
    
        newStory.save((err,story) => {
            if(!err) res.send(story);
            else console.log('Error creating new data : '+ err)
        });
    }
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