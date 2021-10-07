const express = require('express') // installs(requires) express.js
const app = express() // stores express into app variable
const connectDB = require('./config/database') // requiring database file in config folder -> importing connectDB function from our config folder and database.js file
const homeRoutes = require('./routes/home') // requires our homeRoute from the routes folder and home.js file, which tells us which controller will handle the request
const todoRoutes = require('./routes/todos') // requires todos route, which tells us which controller will handle that request

const finishedRoutes = require('./routes/finished') //

require('dotenv').config({path: './config/.env'}) // requires the env file from our config folder

connectDB() // function call that connects to database

app.set('view engine', 'ejs') // Using Template Engine, sets all the displayable content to EJS in the views folder
app.use(express.static('public')) // express middleware that uses the public folder to serve up html/css/images to user
app.use(express.urlencoded({ extended: true })) // middleware that allows incoming objects to be recognized as strings or arrays
app.use(express.json()) // middleware that allows incoming request object as a JSON object

app.use('/', homeRoutes) // accessed the home route file when the home page is requested
app.use('/todos', todoRoutes) // executes a get request to the todos Route file

app.use('/finished', finishedRoutes)
 
app.listen(process.env.PORT, ()=>{ // sets the server to listen for requests on the port established in the env file
    console.log('Server is running, you better catch it!') // message that indicates server is functioning properly
})    