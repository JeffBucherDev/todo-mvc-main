const Todo = require('../models/Todo') // requires the todo model and installs it in the Todo variable

module.exports = {
    getTodos: async (req,res)=>{ // creates an asynchronous method
        try{
            const todoItems = await Todo.find() // uses todo model to grab all documents in db and stores them in variable todoItems
            const itemsLeft = await Todo.countDocuments({completed: false}) // uses todo model to count how many docs have a completed value of false         
            if (todoItems.length === 0){
               res.redirect('/finished')
           }else{
                res.render('todos.ejs', {todos: todoItems, left: itemsLeft}) // responds after controller tells the todos to render ejs with todos and itemsleft information
           } 
        }catch(err){
            console.log(err) // console logs any error from the above code block
        }
    },
    createTodo: async (req, res)=>{ // creates an asychronous method
        try{
            await Todo.create({todo: req.body.todoItem, completed: false}) // creates new todo from the form, and adds a completed value of false
            console.log('Todo has been added!') // informs us of the action taken in a console log
            res.redirect('/todos') // responds by refreshing the page
        }catch(err){
            console.log(err) // console logs any error from the above code block
        }
    },
    markComplete: async (req, res)=>{ // creates an asychronous method
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            }) // finds a todo from the js with the matching id from the db and updates the completed value to true
            console.log('Marked Complete') // informs us of the action taken in a console log
            res.json('Marked Complete') // responds in JSON the todo was marked complete
        }catch(err){
            console.log(err) // console logs any error from the above code block
        }
    },
    markIncomplete: async (req, res)=>{ // creates an asychronous method
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            }) // finds a todo from the js that has a matching id in the db and updates the completed value to false
            console.log('Marked Incomplete') // informs us of the action taken in a console log
            res.json('Marked Incomplete') // responds in json that the todo was marked incomplete
        }catch(err){
            console.log(err) // console logs any error from the above code block
        }
    },
    deleteTodo: async (req, res)=>{ // creates an asychronous method
        console.log(req.body.todoIdFromJSFile)
        try{    
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile}) // finds the todo from the js with a matching id in the db and deletes it 
            console.log('Deleted Todo') // informs us of the action taken in a console log
            res.json('Deleted It') // responds in json that the todo was deleted
        }catch(err){
            console.log(err) // console logs any error from the above code block
        }
    }
}    