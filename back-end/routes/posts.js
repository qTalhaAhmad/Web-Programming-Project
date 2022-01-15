const express = require('express');
const res = require('express/lib/response');

const router = express.Router();

const Post = require('../models/Post');


// Routes
router.get('/',(req,res)=>{
    res.send('we are on post');
    
});

router.get('/save',(req,res)=>{
    res.send('we are on ss');
});

router.post('/save',(req,res) =>{
    res.send('hello ss');
    console.log(req.body);

    const post = new Post({
        name: req.body.name,
        email:req.body.email
    });
   
    post.save();
});
// show specific post
router.get('/:postId',async (req,res) =>{
    const post = await Post.findById(req.params.postId);
    res.json(post);
});

// delete post
router.delete('/:postId',async (req,res) =>{
    const post = await Post.remove({_id: req.params.postId});
    res.json(post);
})

module.exports= router;