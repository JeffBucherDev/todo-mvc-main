const express = require('express') // Installs express into express variable
const router = express.Router() // installs express router into router variable
const todosController = require('../controllers/todos') // installs the todos controller into todosController variable

router.get('/', todosController.getTodos) // when the home (get) route is requested, goes to the todos controller and executes the getTodos method

router.post('/createTodo', todosController.createTodo) // when the createTodo (post) route is requested, goes to the todosController and executes the createTodo method

router.put('/markComplete', todosController.markComplete) // when the markComplete (put) route is requested, goes to the todosController and executes the markComplete method

router.put('/markIncomplete', todosController.markIncomplete) // when the markIncomplete (put) route is requested, goes to the todosController and executes the markIncomplete method

router.delete('/deleteTodo', todosController.deleteTodo) // when the deleteTodo (delete) route is requested, goes to the todosController and executes the deleteTodo method

module.exports = router