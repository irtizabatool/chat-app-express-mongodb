const express = require('express');
const path = require('path');
const app = express();

const connectMongo = require('./connection');

app.get('/', (req,res) => {
    res.send("<h1>Succesfull</h1>")
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));