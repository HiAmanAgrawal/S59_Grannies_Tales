const express =require('express');
const router=express.Router();
const{connectToDB}=require('./db.js')
const story=require('./schema.js')

//to find any story

router.get('/',async(req,res)=>{
    try{
        const stories =await story.find()
        res.json(stories)
    }
    catch(err)
    {
        res.json({error: "Error Occurred in finding the Story"})
    }
});

//to find story with id

router.get('/:id',async(req,res)=>{
    try{
        const foundStory=await story.findById(req.params.id)
        res.json(foundStory)
    }
    catch(err){
        res.json({error:"Error Occurred in finding the story with the particular ID "})
    }
});

//to add another story with respect to the schema 

router.post('/add-items',async(req,res)=>{
    const newStory=new story({
        storyID:req.body.storyID,
        storyName:req.body.storyName,
        Image:req.body.Image,
        category:req.body.category,
        Author:req.body.Author,
        Language:req.body.Language,
    })
    try{
        const savedStory=await newStory.save()
        res.json(savedStory)
    }

    catch(err){
        res.status(500).json({error:"Error Occurred While Updating The Story"})
    }
});

//to make updates in already existed data

router.patch('/:id', async(req,res)=>{
    try{
        const foundStory=await story.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!foundStory){
            return res.status(404).json({error:"Story Not Found"})
        }
        res.json(foundStory)
    }
    catch(err){
        res.status(500).send({err:"Error Occured"});
    }
});

//to make updates/changes in already existed data

router.put('/:id', async(req,res)=>{
    try{
        const foundStory=await story.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!foundStory)
        {
            return res.status(404).json({error:"Story Not Found"})
        }
        res.json(foundStory);
    }
    catch(err){
        res.status(500).send('Error:'+err);
    }
});

// get an id and then delete the data

router.delete('/:id',async(req,res)=>{
    try{
        const foundStory=await story.findByIdAndDelete(req.params.id);
        if(!foundStory)
        {
            return res.status(404).json({error:"Story Not Found"})
        }
        res.send("Story Deleted");
    }
    catch(err){
        res.status(500).send('Error:'+err);
    }
});

connectToDB();
module.exports=router