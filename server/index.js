const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const UserModel = require('./src/models/Users/Users')
const connectToDatabase = require("./src/database/connect")
const bcrypt = require('bcrypt')

dotenv.config() //DEVE SER CHAMADO PRIMEIRO SEMPRE!

connectToDatabase()

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"], //Allowing FRONTEND users from this ORIGIN
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))
app.use(cookieParser())

//Aqui abaixo teremos nosso index.js rotas que se ocupara de todas as rotas:


app.listen(3000 , () => {
    console.log("Server is running")
} )