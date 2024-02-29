const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')


//Middleware que verificaUser
const verifyUser = (req, res, next) => { //Usamos o next para passar o CONTROLE para o PROXIMO MIDDLEWARE
    const token = res.cookies.token
    console.log(token)
    if(!token) {
        return res.json("The token was not available")
    } else {
        jwt.verify(token, "jwt-secret-key", (err,decoded) => { //Verificamos o TOKEN esta presente na MAQUINA 
            if(err) return res.json("Token is wrong")
            next()  //Passamos o controle do RETURN para o proximo MIDDLEWARE
        })
    }
}

module.exports = verifyUser;