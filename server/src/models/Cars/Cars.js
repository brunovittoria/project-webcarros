const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({ //Esses serao os dados dos USERS a serem passados para nosso DB
    issuedDate: Date,
    active: Boolean,
    ceased: Boolean,
    brand: String,
    model: String,
    price: String,
    color: String,
})

const CarModel = mongoose.model("cars", CarSchema)  //Este é o modeloSchema que criamos la dentro do nosso DB
module.exports = CarModel

