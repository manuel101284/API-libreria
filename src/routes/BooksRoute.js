const express = require("express");
const AddAuthorController = require("../controllers/AddAuthorController");
const AddBookController = require("../controllers/AddBookController");

const GetAllAuthorsController = require("../controllers/GetAllAuthorsController");
const GetOneAuthorController = require("../controllers/GetOneAuthorController")
const GetOneBookController = require("../controllers/GetOneBookController")
const GetAllBooksController = require("../controllers/GetAllBooksByAuthorController")

const DeleteOneBook = require("../controllers/DeleteOneBookController")
const DeleteOneAuthor = require("../controllers/DeleteOneAuthorController")

const UpdateOneBook = require("../controllers/UpdateOneBookController")
const UpdateOneAuthor = require("../controllers/UpdateOneAuthorController")


const router = express.Router();

router
    .post("/addauthor", AddAuthorController.AddAuthor)
    .post("/addbook", AddBookController.AddBook)

    .get("/getallauthors", GetAllAuthorsController.GetAllAuthors)
    .get("/getauthor/nameauthor", GetOneAuthorController.GetAuthor)
    .get("/getonebookbyauthor", GetOneBookController.GetOneBookByAuthor)
    .get("/getallbooksbyauthor", GetAllBooksController.GetAllBooksByAuthor)

    .delete("/deletebook", DeleteOneBook.DeleteBook)
    .delete("/deleteauthor", DeleteOneAuthor.DeleteAuthor)

    .patch("/updatebook", UpdateOneBook.UpdateBook)
    .patch("/updateauthor", UpdateOneAuthor.UpdateAuthor)

module.exports = router;

