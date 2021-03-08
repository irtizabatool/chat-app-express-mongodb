const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const Messages = require('../models/Messages');

router.get('/getusers', (req, res) => {
    const user = User.find((err, result) => {
        if(!err){
            res.send({ users: result });
        } else {
            console.log(err);
            throw err;
        }
    });
});

router.post('/messages', (req,res) => {
    if(req.body.sender === req.body.receiver){
        res.send("You Cannot Send Message to Yourself");
    }else{
       // console.log("Hey");
    message = new Messages();
    message.sender = req.body.sender;
    message.receiver = req.body.receiver;
    message.message = req.body.message;
    message.save((err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            res.send("Cannot Save data");
        }
    });
       
    }
});

module.exports = router;