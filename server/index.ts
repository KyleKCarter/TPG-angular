require('dotenv').config();

const express = require('express');
const cors = require('cors');
const massive  = require('massive');
const session = require('express-session');

const app = express();

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

//Massive
massive(CONNECTION_STRING)
    .then((database: any) => {
        app.set('database', database);
        console.log("Database Connected")
    })
    .catch((error: any) => console.log(error));

    app.use(express.json());
    app.use(cors());

//Session


//Controllers
const resort = require('./controllers/resortController');

//ENDPOINTS
app.get('/:resort', resort.getParks);
app.get('/:park_name/park_rides', resort.getParkRides);
app.get('/:park_name/park_rides/:ride_name', resort.getRide);


app.listen(SERVER_PORT, () => console.log(`Running on ${SERVER_PORT}`))