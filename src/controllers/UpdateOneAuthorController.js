const Author = require("../models/AuthorModel")

const UpdateAuthor = async (req, res) => {
    const {
        nameAuthor,
        countryAuthor,
        yearBornAuthor
    } = req.body

    let authorID = await Author.findOne({ nameAuthor: nameAuthor }, { _id: 1 })

    if (!authorID) {
        res.send("No existe un autor registrado con ese nombre")
    }
    else {
        const authorToUpdate = await Author.findOneAndUpdate(
            { _id: authorID },
            {
                $set: {
                    nameAuthor: nameAuthor,
                    countryAuthor: countryAuthor,
                    yearBornAuthor: yearBornAuthor
                }
            },
            { new: true }
        )

        res.send("Autor actualizado correctamente")
    }
}

module.exports = {
    UpdateAuthor
}