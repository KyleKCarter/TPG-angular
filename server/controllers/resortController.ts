import { RequestHandler } from "express"

const getParks: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    console.log("hit 1")
    db.get_parks(req.params["resort"]).then((parks: any) => {
        console.log("hit 2")
        res.status(200).json(parks)
    }).catch((error: any) => {
        console.log(error)
        res.status(500).json("Cannot process your request for Resort Parks at this time.");
    })
}

const getParkRides: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    console.log('hit');
    console.log("req: ", req.params)
    db.get_park_rides(req.params["park_name"]).then((rides: any) => {
        console.log("rides: ", rides)
        res.status(200).json(rides);
    }).catch((error: any) => {
        console.log(error)
        res.status(500).json("Cannot process your request for Park Rides at this time.");
    })
}

const getRide: RequestHandler = (req, res) => {
    const db = req.app.get('database');
    db.get_ride(req.params["ride_name"]).then((ride: any) => {
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