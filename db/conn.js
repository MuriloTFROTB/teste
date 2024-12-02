require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
    mongoose.set("strictQuery", true);

    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`erro ${error}`)
    }

}

module.exports = main