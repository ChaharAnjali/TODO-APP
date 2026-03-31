const Todo = require("../models/todo.model")
const createTodo = async(req, res)=>{
    try{
        const todo = await Todo.create(req.body)
        return res.status(201).json({"message": "respond successfully","data": todo})

    } catch (error) {
        res.status(500).json({"error": error.message})
    }
}

const getTodos = async(req, res) => {
    try {
        const todo = await Todo.find();
        return res.status(200).json({"message": "fetch successfully","data": todo})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateTodo = async(req, res) => {
    try {
        const updatetodo = await Todo.findByIdAndUpdate(id , req.body);
        res.status(200).json({"message": "todo upadated","data": updateTodo})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodo = async(req, res) => {
    try {
        const deletetodo = await Todo.findByIdAndDelete(id , req.body);
        res.status(200).json({"message": "deleted successfully","data": deleteTodo})

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {createTodo, getTodos};