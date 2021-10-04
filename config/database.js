const mongoose = require('mongoose') // installs mongoose (front end library for mongodb) allows us to provide structure to our data

const connectDB = async () => { // creates an asynchronous function and stores it into connectDB
  try { // trys following code block and checks for errors
    const conn = await mongoose.connect(process.env.DB_STRING, { // making a request using the mongoose connect method, accessing our db string in our env file, passing the following object. 
      useNewUrlParser: true, // idk
      useUnifiedTopology: true, // idk
      useFindAndModify: false, // idk
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`) // log the connection to the console
  } catch (err) {
    console.error(err) // log the error to the console, if there is one
    process.exit(1) // exit the process after an error is logged
  }
}

module.exports = connectDB // exports the connectDB function so it can be used elsewhere (server.js)
