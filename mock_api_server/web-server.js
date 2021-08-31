const express = require('express');
const app = express();
const path = require('path');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200") //update to match the domain you will make the request from
    next();
});

app.use(express.json());

app.listen(9000, () => {
    console.log('server listening on port 9000')
})