const express = require("express");
const router = express.Router();
const {getTodos, createTodo}= require("../controllers/todo.controller")

router.get("/", getTodos)
router.post("/", createTodo)
router.put("/", createTodo)
router.delete("/", createTodo)

module.exports = router;
