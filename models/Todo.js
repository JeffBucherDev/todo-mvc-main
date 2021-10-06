const mongoose = require('mongoose') // stores mongoose in mongoose variable

const TodoSchema = new mongoose.Schema({ // Creates a new mongoose schema (structure of the todo documents)
  todo: { // todo is the key
    type: String, // type is a string
    required: true, // forces todo to be a string
  },
  completed: { // completed key
    type: Boolean, // type is a boolean
    required: true, // forces completed to be a boolean
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
