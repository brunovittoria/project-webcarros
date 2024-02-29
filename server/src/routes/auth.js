const express           =    require('express')
const router            =    express.Router()
const verifyUser        =    require('../middlewares/users')
const bcrypt            =    require('bcrypt')
const jwt               =    require('jsonwebtoken')
const UserModel         =    require('../models/Users/Users')


router.get('/check-auth', verifyUser, (req, res) => {
    return res.json("Success")
})

router.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})  //Aqui verificamos se o usuario existe, verificando o EMAIL dele
    .then(user => {                     
        if(user) {                     // Verifica se o usuário existe no DB      
            bcrypt.compare(password, user.password, (err, response) => { // Compara a senha fornecida com a senha armazenada no DB
                if(response) {
                    const token = jwt.sign({email: user.email}, "jwt-secret-key", {expiresIn: "1d"}) //O Token inclui INFOS do USER, nesse caso so EMAIL
                    res.cookie("token", token) //Enviamos o token no COOKIE
                    res.json("Success") // Se a comparação for bem-sucedida, a senha está correta
                } else {
                    res.json("Incorrect password")
                }
            })
        } else {
            res.json("No record exists")   //Erro caso o usuario nao existir dentro do DB
        }
    })
})