const express = require("express");
const router = express.Router();

const {
    getAllBooks,
    getBookById,
    createBook
} = require("../controllers/bookController");

const validateBookInput =
    require("../middleware/validateBookInput");

// GET all books
router.get("/", getAllBooks);

// GET a specific book by ID
router.get("/:id", getBookById);

// POST a new book with input validation
router.post("/", validateBookInput, createBook);

module.exports = router;