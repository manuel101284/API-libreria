const Book = require("../models/BookModel")

const UpdateBook = async (req, res) => {
    const {
        titleBook,
        yearBook,
        pagesBook
    } = req.body

    let bookID = await Book.findOne({ titleBook: titleBook }, { _id: 1 })

    if (!bookID) {
        res.send("No existe un libro registrado con dicho nombre")
    }
    else {
        const bookToUpdate = await Book.findOneAndUpdate(
            { _id: bookID },
            {
                $set: {
                    titleBook: titleBook,
                    yearBook: yearBook,
                    pagesBook: pagesBook
                }
            },
            { new: true }
        )

        res.send("El Libro se ha actualizado correctamente")
    }
}

module.exports = {
    UpdateBook
}