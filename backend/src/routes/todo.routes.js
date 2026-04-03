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
const auth = require("../middleware/auth.middlewware")

//  GET all todos
router.get("/", showLog,auth, getTodos);

//  CREATE todo
router.post("/", validateTodo,auth, createTodo);

//  UPDATE todo (ID required)
router.put("/:id",auth, updateTodo);

//  DELETE todo (ID required)
router.delete("/:id",auth, deleteTodo);


module.exports = router;