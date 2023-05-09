const Author = require("../models/AuthorModel")

const DeleteAuthor = async (req, res) => {
    const {
        nameAuthor
    } = req.body

    let authorID = await Author.findOne({ nameAuthor: nameAuthor }, { _id: 1 })

    if (!authorID) {
        res.send("No existe un autor con ese nombre en nuestra base de datos")
    }
    else {
        const deletedAuthor = await Author.deleteOne({ _id: authorID })

        if (deletedAuthor) {
            res.send("Autor eliminado con éxito")
        }
        else {
            res.send("Error: No se ha podido eliminar dicho autor")
        }
    }
}

module.exports = {
    DeleteAuthor
}