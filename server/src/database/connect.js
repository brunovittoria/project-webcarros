const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@webcars.tgam586.mongodb.net/?retryWrites=true&w=majority&appName=webcarsy`
    );
    console.log("Conexão ao DB realizada");
    } catch (error) {
    console.error("Erro ao conectar ao DB:", error.message);
    }
};

module.exports = connectToDatabase;
