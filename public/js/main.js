// These all return Node Lists, not arrays
const deleteBtn = document.querySelectorAll('.del') // targets everything that has a del class in the document
const todoItem = document.querySelectorAll('span.not') // targets everything that has the span.not class in the document
const todoComplete = document.querySelectorAll('span.completed') // targets everything that has the span.completed class in the document

Array.from(deleteBtn).forEach((el)=>{ // converts everything from the deleteBtn nodelist, and turns it into an array
    el.addEventListener('click', deleteTodo) // adds an event listener that, upon clicks, executes the deleteTodo function
})

Array.from(todoItem).forEach((el)=>{ // converts everything from the todoItem nodelist, and turns it into an array
    el.addEventListener('click', markComplete) // adds an event listener that, upon clicking, executes the markComplete function
})

Array.from(todoComplete).forEach((el)=>{ // converts everything from the todoComplete nodelist, and turns it into an array
    el.addEventListener('click', markIncomplete) // adds an event listener that, upon clicks, executes the markIncomplete function
})

async function deleteTodo(){  // asychronous function that deletes todo's
    const todoId = this.parentNode.dataset.id // grabs and stores the parent nodes (li) ID from the database into todoId variable
    try{
        const response = await fetch('todos/deleteTodo', { // waits for the promise to resolve, then goes to the deletetodo url with the data
            method: 'delete', // the type of request (delete)
            headers: {'Content-type': 'application/json'}, // the type of content (json)
            body: JSON.stringify({ // turns the following json object into a string
                'todoIdFromJSFile': todoId // the key (todoIdFromJSFile) and its value (todoID (the id from the db))
            })
        })
        const data = await response.json() // takes all the response from the above promise and stores it into data
        console.log(data) // console logs that response
        location.reload() // reloads the page
    }catch(err){
        console.log(err) // throws any errors into console
    }
}

async function markComplete(){ // asychronous function that marks todos complete
    const todoId = this.parentNode.dataset.id // grabs and stores the parent nodes (li) id from the database into todoId
    try{
        const response = await fetch('todos/markComplete', { // (promise) that waits for the resolution from the markComplete url data
            method: 'put', // the type of request (put)
            headers: {'Content-type': 'application/json'}, // the type of content (json)
            body: JSON.stringify({ // turns the following json object into a string
                'todoIdFromJSFile': todoId // the key (todoIdFromJSFile) and it's value (todoID (id from the db))
            })
        })
        const data = await response.json() // takes all the response from the above promise and stores it into data variable
        console.log(data) // logs data variable
        location.reload() // reloads the page
    }catch(err){
        console.log(err) // console logs any error from the above code block
    }
}

async function markIncomplete(){  // asychronous function that marks  todos incomplete
    const todoId = this.parentNode.dataset.id // grabs and stores the parent nodes (li) id from the database into todoId variable
    try{
        const response = await fetch('todos/markIncomplete', { // waits for the promise to resolve from the markIncomplete url data
            method: 'put', // the type of request (put)
            headers: {'Content-type': 'application/json'}, // the type of content (json)
            body: JSON.stringify({ // turns the following json object into a string
                'todoIdFromJSFile': todoId // the key (todoIdFromJSFile) and its value (todoID (the id from the db))
            })
        })
        const data = await response.json() // takes all the response from the above promise and stores int into data variable
        console.log(data) // console logs the data variable
        location.reload() // reloads the page
    }catch(err){
        console.log(err) // throws any errors into console
    }
}