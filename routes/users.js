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

router.get('/getmessages', function(req, res) {
    let leftuser = req.query.sender;
    let rightuser = req.query.receiver;
    const message = Messages.find({
        $or: [
            { $and: [
                { sender: { $eq: `${leftuser}` }},
                { receiver: { $eq: `${rightuser}` } }        
            ] },
            { $and: [
                { sender: { $eq: `${rightuser}` }},
                { receiver: { $eq: `${leftuser}` } }        
            ] }
        ]
    }, 
    (err, result) => {
        if(!err){
            res.send({ users: result });
        } else {
            console.log(err);
            throw err;
        }
    });
});

module.exports = router;