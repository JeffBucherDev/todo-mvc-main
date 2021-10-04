module.exports = { // exporting an object where the getIndex key stores a method
    getIndex: (req,res)=>{
        res.render('index.ejs') // method that renders the html as a response
    }
}