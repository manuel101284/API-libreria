const Author = require("../models/AuthorModel");
const Book = require("../models/BookModel");
const { json } = require("body-parser");

const AddBook = async (req,res) => {
    const { 
        nameAuthor,
        titleBook,
        yearBook,
        pagesBook
    } = req.body

    let authorID = Author.find({nameAuthor: nameAuthor})    
    
    //console.log(doc(authorID))
    
    const authorKey = authorID._id
    console.log(authorKey)

    const NewBook = new Book({
        titleBook: titleBook,
        yearBook: yearBook,
        pagesBook: pagesBook,
        authorIdBook: "Referencia"
    })

    NewBook.save();
    console.log("Libro registrado correctamente")
    res.send(NewBook)
}

module.exports = {
    AddBook
}
