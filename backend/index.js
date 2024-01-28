const express = require("express");
import { createTodo, updateTodo } from "./types.js";

const app = express();
app.use(express.json());

app.get("/todos", function (req, res) {

})

app.post("/todo", function (req, res) {

})

app.put("/completed", function (req, res) {

})

