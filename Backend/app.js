
const dotenv = require('dotenv') ; 
dotenv.config() ; 
const express = require('express') ;
const app = express()
const cors = require('cors') ; 

const userRoutes = require('./routes/user.routes') ; 


app.use(cors());
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true})) ; 

const connectToDb = require('./database/db') ; 
connectToDb()

app.get('/', (req, res) => {
    res.send("Hello World") ;
}) ; 

app.use('/users', userRoutes) ; 

module.exports = app