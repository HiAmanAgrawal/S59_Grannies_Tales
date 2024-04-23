const express = require('express');
const router = express.Router();
const { connectToDB } = require('./db.js');
const Joi = require('joi');
const story = require('./schema.js');
const User = require('./userSchema');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const result = require('dotenv').config();

if (result.error) {
    console.error("Error loading environment variables:", result.error);
    throw result.error; 
}


if (!process.env.SECRET) {
    console.error("SECRET environment variable is not defined");
    throw new Error("SECRET environment variable is not defined");
}

// Joi schema for story validation
const storySchema = Joi.object({
    storyName: Joi.string().required(),
    Image: Joi.string().uri().required(),
    category: Joi.string().required(),
    Author: Joi.string().required(),
    Language: Joi.string().required()
});

const validateStory = (req, res, next) => {
    const { error } = storySchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};
router.post('/signup/newuser', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// POST route to add a new story with Joi validation
router.post('/add-items/newItem', validateStory, async (req, res) => {
    const newStory = new story({
        storyName: req.body.storyName,
        Image: req.body.Image,
        category: req.body.category,
        Author: req.body.Author,
        Language: req.body.Language,
        // created_by: req.body.created_by
    });

    try {
        const savedStory = await newStory.save();
        res.json(savedStory);
    } catch (err) {
        res.status(500).json({ error: "Error Occurred While Updating The Story" });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const passwordMatch = password == user.password;

        if (!passwordMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }
        const token = jwt.sign({ userId: user.password }, SECRET);
        res.json({ _id: user.username , accessToken: token});
    } catch (error) {
        console.error("Error occurred during login:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  router.get('/entities/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const entities = await Entity.find({ created_by: userId });
      res.json(entities);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });  
// GET routes to find all stories and find story by ID
router.get('/', async (req, res) => {
    try {
        const stories = await story.find(); 
        res.json(stories);
    } catch (err) {
        res.status(500).json({ error: "Error Occurred in finding the Story" });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const foundStory = await story.findById(req.params.id);
        res.json(foundStory);
    } catch (err) {
        res.status(500).json({ error: "Error Occurred in finding the story with the particular ID " });
    }
});

// PATCH and PUT routes to update story
router.patch('/:id', async (req, res) => {
    try {
        const foundStory = await story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foundStory) {
            return res.status(404).json({ error: "Story Not Found" });
        }
        res.json(foundStory);
    } catch (err) {
        res.status(500).send({ err: "Error Occurred" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const foundStory = await story.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!foundStory) {
            return res.status(404).json({ error: "Story Not Found" });
        }
        res.json(foundStory);
    } catch (err) {
        res.status(500).send('Error:' + err);
    }
});

// DELETE route to delete story by ID
router.delete('/:id', async (req, res) => {
    try {
        const foundStory = await story.findByIdAndDelete(req.params.id);
        if (!foundStory) {
            return res.status(404).json({ error: "Story Not Found" });
        }
        res.send("Story Deleted");
    } catch (err) {
        res.status(500).send('Error:' + err);
    }
});

connectToDB();
module.exports = router;
