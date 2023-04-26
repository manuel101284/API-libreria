const Author = require("../models/AuthorModel")
const Book = require("../models/BookModel")

// Get All books from an indicated author
const GetAllBookByAuthor = async (req, res) => {
    const {
        nameAuthor
    } = req.body

    try {
        const bookByAuthor = await Author.find({ nameAuthor: nameAuthor })
        if (!bookByAuthor) {
            res.send({ message: "Autor no encontrado" })
        }
        else {
            const authorId = bookByAuthor._id
            const booksByAuthor = await Book.find({ authorIdBook: authorId })
            res.send(booksByAuthor)
        }
    }
    catch (err) {
        res.send({ message: "Autor no encontrado" })
    }
};

module.exports = {
    GetAllBookByAuthor
}
