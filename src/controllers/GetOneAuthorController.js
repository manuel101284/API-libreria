const Author = require("../models/AuthorModel");

const GetAuthor = async (req, res) => {
    const {
        nameAuthor
    } = req.body

    //const nameAuthor = req.body

    try {
        let getOneAuthor = await Author.findOne({ nameAuthor: nameAuthor }, { _id: 1 });
        console.log(getOneAuthor)

        if (getOneAuthor) {
            let oneAuthor = await Author.findOne({ _id: getOneAuthor })
            res.json(oneAuthor);
            console.log(oneAuthor);
        }
        if (!getOneAuthor) {
            console.log(getOneAuthor)
            res.send("Este autor no existe")
        }

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }

}

module.exports = {
    GetAuthor
}