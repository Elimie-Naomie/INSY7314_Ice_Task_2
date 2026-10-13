let books = [
    {
        id: "b1",
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        genre: "Fiction",
        year: 1958,
        price: 180
    },
    {
        id: "b2",
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Adventure",
        year: 1988,
        price: 220
    }
];

// GET all books
const getAllBooks = (req, res) => {
    res.status(200).json({
        success: true,
        count: books.length,
        data: books
    });
};

// GET a book by its ID
const getBookById = (req, res) => {
    const book = books.find(
        b => b.id === req.params.id
    );

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    res.status(200).json({
        success: true,
        data: book
    });
};

// POST a new book
const createBook = (req, res) => {
    const { id, title, author, genre, year, price } = req.body;

    // Check whether the ID already exists.
    const existingBook = books.find(
        b => b.id === id
    );

    if (existingBook) {
        return res.status(409).json({
            success: false,
            message: "A book with this ID already exists"
        });
    }

    const newBook = {
        id,
        title,
        author,
        genre,
        year,
        price
    };

    books.push(newBook);

    res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook
};