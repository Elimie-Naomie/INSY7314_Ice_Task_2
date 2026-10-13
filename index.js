// Import required packages.
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 4000;

// Controlled CORS configuration.
const allowedOrigins = (
    process.env.ALLOWED_ORIGIN || "http://localhost:3000"
).split(",").map(origin => origin.trim());

app.use(cors({
    origin: function (origin, callback) {
        // Allow Postman and other requests without an Origin header.
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        const error = new Error("Not allowed by CORS");
        error.statusCode = 403;
        callback(error);
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// Allow the server to read JSON request bodies.
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Books API"
    });
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        message: "Server is running"
    });
});

// Book resource routes
app.use("/api/books", bookRoutes);

// Handle routes that do not exist.
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

// Handle malformed JSON and other unexpected errors.
app.use(errorHandler);

// Start the server.
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});