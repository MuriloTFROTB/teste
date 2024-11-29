const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskService = new Schema({
    title: String,
    text: String,
}, {
    timestamps: true
});

const Task = mongoose.model("Task", taskService);

module.exports= Task