const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:7TJaFOLSF1g9GjIO@cluster0.sduruc7.mongodb.net/todoAppDB");


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}