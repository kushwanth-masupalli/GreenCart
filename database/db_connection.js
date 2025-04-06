const mongoose = require('mongoose');
const path  = require('path')
const product = require(path.join(__dirname, 'db_schema.js'));


async function connectToMongo(){
      await mongoose.connect('mongodb://127.0.0.1:27017/greencart')
      .then(() => {
          console.log("Connected to MongoDB");
      })
}


module.exports = connectToMongo ;