import { RequestHandler } from "express"

const getParks: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    console.log('hit get parks');
    db.get_parks(req.params["resort"]).then((parks: any) => {
        res.status(200).json(parks)
    }).catch((error: any) => {
        console.log(error)
        res.status(500).json("Cannot process your request for Resort Parks at this time.");
    })
}

const getParkRides: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    console.log('hit get park rides');
    db.get_park_rides(req.params["park_name"]).then((rides: any) => {
        res.status(200).json(rides);
    }).catch((error: any) => {
        console.log(error)
        res.status(500).json("Cannot process your request for Park Rides at this time.");
    })
}

const getRide: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    console.log('hit get ride');
    const {park_name, ride_name} = req.params;
    db.get_ride(park_name, ride_name).then((ride: any) => {
        res.status(200).json(ride);
    }).catch((error: any) => {
        console.log(error)
        // res.status(500).json(`Cannot process your request for ${req.body.ride_name} at this time.`)
        res.status(500).json("Cannot process your request for the Ride at this time.");
    })
}


module.exports = {
    getParks,
    getParkRides,
    getRide
}