const express = require('express')
const router = express.Router()

//Este é o file principal onde temos nossa rota principal e a construçao do nosso route, que sera usado em todo aplicativo.

//Home Page

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express'})
})

module.exports = router