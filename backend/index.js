const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "TODO Created"
    })
})

app.get("/todos", async function (req, res) {

    const todos = await todo.find({})

    res.json({
        todos: todos
    })
})

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
    }

    await todo.findByIdAndUpdate({
        _id: req.body.id
    }, {
        completed: updatePayload.status

    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);