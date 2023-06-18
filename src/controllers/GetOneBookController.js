const Author = require("../models/AuthorModel")
const Book = require("../models/BookModel")

// Get one unique book from an indicated author
const GetOneBookByAuthor = async (req, res) => {
    const {
        nameAuthor,
        titleBook
    } = req.body

    try {
        const bookByAuthor = await Author.findOne({ nameAuthor: nameAuthor })
        if (!bookByAuthor) {
            res.send({ message: "Autor no encontrado" })
        }
        else {
            const authorId = bookByAuthor._id
            const bookByTitle = await Book.findOne({ titleBook: titleBook })

            if (!bookByTitle) {
                res.send({ message: "Libro no encontrado" })
            }
            else {
                const BookAlready = await Book.find({ titleBook: titleBook, authorIdBook: authorId })
                res.send(BookAlready)
            }
        }
    }
    catch (err) {
        res.send({ message: "Autor no encontrado" })
    }
};

module.exports = {
    GetOneBookByAuthor
}