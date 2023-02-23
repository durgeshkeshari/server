// This the Train Reservation System Controller Module
// We will use mongoose node module for accessing our database from MongoDB
const mongoose = require('mongoose');

// First let us connect to the database mydb running locally on my PC
mongoose
    .connect('mongodb://127.0.0.1:27017/mydb', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

// We need to create a schema before reading data from the database
const TrainsSchema = new mongoose.Schema(
    {
        Country: { type: String, required: true },
        Capital: { type: [String], required: true },
        Currency: { type: Number, required: true },
		Population: { type: String, required: true },
        EducationRank: { type: String, required: true },
    },
    { timestamps: true },
)

// Next is to create a model within mongoose using the schema and our database
const countries = mongoose.model('countries', TrainsSchema);

// This function searches for data in the model and returns data in JSON format
// Right now, this function gets information about all trains
getCountries = async (req, res) => {
    await countries.find({}, (err, countriesLocal) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!countriesLocal.length) {
            return res
                .status(404)
                .json({ success: false, error: `Country not found` })
        }
        console.log(countriesLocal); // add this line to log the data
        return res.status(200).json({ success: true, data: countriesLocal })
    }).catch(err => console.log(err))
}


// Our controller would expose the getTrains function to whoever is using it
module.exports = {
    getCountries
}