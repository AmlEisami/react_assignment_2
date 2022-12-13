const mongoose = require("mongoose");

const MONGO_URI = 'mongodb+srv://amleisami:Aa123456@store.k4kbvaj.mongodb.net/store?retryWrites=true&w=majority'
mongoose.connect(MONGO_URI);

let database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error:"));

module.exports = database;
