// Middleware to validate incoming book data.
const validateBookInput = (req, res, next) => {
    const { id, title, author, genre, year, price } = req.body;

    // Check required text fields.
    if (
        typeof id !== "string" || !id.trim() ||
        typeof title !== "string" || !title.trim() ||
        typeof author !== "string" || !author.trim() ||
        typeof genre !== "string" || !genre.trim()
    ) {
        return res.status(400).json({
            success: false,
            message: "ID, title, author and genre are required and must be non-empty strings"
        });
    }

    // Check publication year.
    if (
        !Number.isInteger(year) ||
        year < 1 ||
        year > new Date().getFullYear()
    ) {
        return res.status(400).json({
            success: false,
            message: "Year must be a valid publication year"
        });
    }

    // Check book price.
    if (
        typeof price !== "number" ||
        !Number.isFinite(price) ||
        price <= 0
    ) {
        return res.status(400).json({
            success: false,
            message: "Price must be a positive number"
        });
    }

    // Continue to the controller if validation succeeds.
    next();
};

module.exports = validateBookInput;