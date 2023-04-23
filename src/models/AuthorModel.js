const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    nameAuthor: {
        type: String,
        require: true
    },
    countryAuthor:{
        type: String,
        require: true
    }, 
    yearBornAuthor:{
        type: Number,
        require: false
    }
})

module.exports = mongoose.model("AuthorModel", AuthorSchema)