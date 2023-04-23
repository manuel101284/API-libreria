const Author = require("../models/AuthorModel");

const GetAuthor = async (req, res) => {
    const nameAuthor = "Haruki Murakami"

    try{
        const getAuthor = await Author.find({ nameAuthor: nameAuthor}).exec();
        res.send(getAuthor);
    }
    catch(err){
        res.send({ message: "Autor no encontrado" })
    }

}

module.exports = {
    GetAuthor
}