const Todo = require("../models/todo.model");

// ✅ CREATE
const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        return res.status(201).json({
            message: "respond successfully",
            data: todo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ GET ALL
const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find();
        return res.status(200).json({
            message: "fetch successfully",
            data: todo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ UPDATE
const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;   // 🔥 important

        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            message: "todo updated",
            data: updatedTodo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ DELETE
const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;   // 🔥 important

        const deletedTodo = await Todo.findByIdAndDelete(id);

        res.status(200).json({
            message: "deleted successfully",
            data: deletedTodo
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ EXPORT ALL (VERY IMPORTANT 🔥)
module.exports = {
    createTodo,
    getTodos,
    updateTodo,
    deleteTodo
};