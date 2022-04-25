require('dotenv').config()
const express = require('express')
const app = express();
const port = `${process.env.PORT}` || 5000;
const cors = require('cors');
app.use(express.json())
app.use(cors())

const connect = require('./src/configs/db')
const petsController = require('./src/controllers/pets.controller')
const {register,login} = require('./src/controllers/auth.controller')


app.use('/petServiceInfo',petsController)

app.post('/register',register)
app.post('/login',login)

app.listen(port, async() => {
    try {

        await connect()
        console.log(`listing to the port ${port}`)
    } catch (error) {
        console.log('error:', error)
        
    }
})