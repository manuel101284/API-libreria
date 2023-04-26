const mongoose = require("mongoose");
const { Schema, ObjectId, model } = require("mongoose")

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
        type: Schema.Types.ObjectId,
        ref: 'AuthorSchema'
    }
})

module.exports = mongoose.model("BookModel", BookSchema)