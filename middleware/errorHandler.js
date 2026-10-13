// Handles unexpected errors across the API.
const errorHandler = (err, req, res, next) => {
    console.error(err.stack || err.message);

    const statusCode =
        err.statusCode || err.status || 500;

    res.status(statusCode).json({
        success: false,
        message: statusCode === 500
            ? "Internal Server Error"
            : err.message
    });
};

module.exports = errorHandler;