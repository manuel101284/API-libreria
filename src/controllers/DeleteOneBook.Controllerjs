const Book = require("../models/BookModel")

const DeleteBook = async (req, res) => {
    const {
        titleBook
    } = req.body

    let bookID = await Book.findOne({ titleBook: titleBook })

    const deletedBook = await Book.findByIdAndDelete({ _id: bookID })

    if (deletedBook) {
        res.send("Libro Eliminado con éxito")
    }
    else {
        res.send("Dicho libro no existe en la base de datos")
    }
}

module.exports = {
    DeleteBook
}