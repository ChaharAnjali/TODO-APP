const express = require("express");
const router = express.Router();

//  Controllers import
const {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
} = require("../controllers/todo.controller");

//  Middlewares import
const showLog = require("../middleware/log.middleware");
const { validateTodo } = require("../middleware/validateTodo.middleware");


//  GET all todos
router.get("/", showLog, getTodos);

//  CREATE todo
router.post("/", validateTodo, createTodo);

//  UPDATE todo (ID required)
router.put("/:id", updateTodo);

//  DELETE todo (ID required)
router.delete("/:id", deleteTodo);


module.exports = router;