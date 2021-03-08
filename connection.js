const mongoose = require('mongoose');

const MONGOURI = "mongodb://localhost:27017/chatapp";

const connectMongo = mongoose.connect(MONGOURI,
    { useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (err) => {
    if(!err){
        console.log("Connected to Database");
    } else {
        console.log(err);
        throw err;
    }
});

module.exports = connectMongo;