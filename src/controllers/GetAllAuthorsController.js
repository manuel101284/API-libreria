const Author = require("../models/AuthorModel");

//Get all person registered in the database
const GetAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find({}).exec()
        res.send(authors)
    }
    catch(err){
        res.send({ message: "NO HAY AUTORES"})
    }
};

module.exports = {
   GetAllAuthors
}

