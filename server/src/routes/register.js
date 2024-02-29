const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const UserModel = require('../models/Users/Users')
const bcrypt = require('bcrypt')
const router = express.Router()


//Aqui o user ira cair na rota /register e ira criar um novo user
router.post('/create-account', (req,res) => {
    const {name, email, password} = req.body  //Fazemos o desconstructuring para fazer a HASH da PWD com BCRYPT
    bcrypt.hash(password, 10) //O 10 representa o custo do algoritmo de hash bcrypt. 2^10 (1024) vezes para gerar o hash da senha
    .then(hash => {
        UserModel.create({name, email, password: hash}) //Devemos atribuir o valor da PASSWORD para HASH
        .then(users => res.json(users))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
})



module.exports = router