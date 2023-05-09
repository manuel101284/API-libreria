const Book = require("../models/BookModel")

const DeleteBook = async (req, res) => {
    const {
        titleBook
    } = req.body

    let bookID = await Book.findOne({ titleBook: titleBook }, { _id: 1 })

    if (!bookID) {
        res.send("No existe un libro con ese título en nuestra base de datos")
    }
    else {
        const deletedBook = await Book.deleteOne({ _id: bookID })

        if (deletedBook) {
            res.send("Libro Eliminado con éxito")
        }
        else {
            res.send("Error: No se ha podido eliminar dicho libro")
        }
    }


}

module.exports = {
    DeleteBook
}