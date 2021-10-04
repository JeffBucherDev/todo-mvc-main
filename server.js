const express = require('express') // installs(requires) express.js
const app = express() // stores express into app variable
const connectDB = require('./config/database') // importing connectDB function from our config folder and database.js file
const homeRoutes = require('./routes/home') // imports our homeRoute from the routes folder and home.js file
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    