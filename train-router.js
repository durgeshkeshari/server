// This is the Router module for our Train Reservation System Server
// Our router uses the express node module to route the data received from controller
const express = require('express');

// Let us define the controller for the trains
const CountryCtrl = require('./train-ctrl.js')

// Define the router using the express module
const CountryRouter = express.Router()

// When any module calls our router using the HTTP GET method with the given path, router will return the trains data
CountryRouter.get('/countries', CountryCtrl.getCountries)

// Our router exposes the TrainRouter Object
module.exports = CountryRouter