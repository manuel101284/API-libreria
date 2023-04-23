const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    titleBook: {
        type: String,
        require: true
    },
    yearBook: {
        type: Number,
        require: true
    },
    pagesBook: {
        type: Number,
        require: true
    },
    authorIdBook: {
        type: String,
        require:true
    }
})

module.exports = mongoose.model("BookModel", BookSchema)