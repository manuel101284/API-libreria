const Author = require("../models/AuthorModel");
const Book = require("../models/BookModel");
const { json } = require("body-parser");

const AddBook = async (req, res) => {
    const {
        nameAuthor,
        titleBook,
        yearBook,
        pagesBook
    } = req.body

    let author = await Author.findOne({ nameAuthor: nameAuthor })

    if (!author) {
        console.log("Autor no encontrado")
        res.send("Autor no encontrado")
    }
    else {
        const BookExisted = await Book.findOne({ titleBook: titleBook })

        if (BookExisted) {
            console.log("Este libro ya está registrado")
            res.send("Este libro ya está registrado")
        }
        else {
            console.log(author)
            const authorKey = author._id
            console.log(authorKey)

            const NewBook = new Book({
                titleBook: titleBook,
                yearBook: yearBook,
                pagesBook: pagesBook,
                authorIdBook: authorKey
            })

            NewBook.save();
            console.log("Libro registrado correctamente")
            res.send(NewBook)
        }
    }
}

module.exports = {
    AddBook
}
