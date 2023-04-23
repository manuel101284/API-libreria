const express = require("express");
const AddAuthorController = require("../controllers/AddAuthorController");
const AddBookController = require("../controllers/AddBookController");
const GetAllAuthorsController = require("../controllers/GetAllAuthorsController");
const GetOneAuthorController = require("../controllers/GetOneAuthorController")

const DeleteOneBook = require("../controllers/DeleteOneBook")

const router = express.Router();

router
    .post("/addauthor", AddAuthorController.AddAuthor)
    .post("/addbook", AddBookController.AddBook)
    .get("/getallauthors", GetAllAuthorsController.GetAllAuthors)
    .get("/getauthor", GetOneAuthorController.GetAuthor)


module.exports = router;

