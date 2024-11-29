const mongoose = require("mongoose");

async function main() {
    mongoose.set("strictQuery",true);

    try {
        await mongoose.connect(`mongodb+srv://murilo:CODDfodTpAQkYQ19@cluster0.xcn4n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

        console.log("Conectado ao banco!")
    } catch (error) {
        console.log(`erro ${error}`)
    }

}

module.exports = main