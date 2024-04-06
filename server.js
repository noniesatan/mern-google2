const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const {readdirSync} = require('fs')
const connectDB = require('./Config/db')

require('dotenv').config();
//Routes
// const authRoute = require('./Routes/auth')
// const router = require('./Routes/auth')


//app
const app = express()

connectDB()

//middlewar
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '20mb'}))
app.use(cors())

//Routes
// app.get('/non',(req,res) => {
//     res.send('Hlelele')
// })
// app.use('/api',authRoute)

readdirSync('./Routes')
.map((r) => app.use('/api',require("./Routes/"+r)))



//Run server
const port = 5003
app.listen(port,()=> console.log('Server is on port '+port))