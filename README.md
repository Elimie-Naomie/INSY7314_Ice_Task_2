# INSY7314 ICE Task 2 — Books API

## Project Description

This project is a structured backend REST API developed using Node.js and Express.js. It manages a temporary in-memory collection of books and demonstrates routing, controllers, middleware, input validation, controlled CORS and centralized error handling.

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- GitHub

## Installation

1. Open the project in VS Code.
2. Open the terminal and navigate to the `api` folder.
3. Run `npm install`.
4. Create a `.env` file with:

   `PORT=4000`

   `ALLOWED_ORIGIN=http://localhost:3000`

5. Run `npm run dev`.
6. Access the API at `http://localhost:4000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Root route |
| GET | /health | Check server health |
| GET | /api/books | Retrieve all books |
| GET | /api/books/:id | Retrieve a book by ID |
| POST | /api/books | Add a new book |

## Sample POST Request Bodies

All requests use `POST http://localhost:4000/api/books` with `Content-Type: application/json`.

### Book 1

```json
{
  "id": "b3",
  "title": "Purple Hibiscus",
  "author": "Chimamanda Ngozi Adichie",
  "genre": "Fiction",
  "year": 2003,
  "price": 190
}
```

### Book 2

```json
{
  "id": "b4",
  "title": "Animal Farm",
  "author": "George Orwell",
  "genre": "Satire",
  "year": 1945,
  "price": 150
}
```

### Book 3

```json
{
  "id": "b5",
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "genre": "Fantasy",
  "year": 1937,
  "price": 250
}
```

### Book 4

```json
{
  "id": "b6",
  "title": "Beloved",
  "author": "Toni Morrison",
  "genre": "Historical Fiction",
  "year": 1987,
  "price": 210
}
```

### Book 5

```json
{
  "id": "b7",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "year": 1925,
  "price": 175
}
```

## Input Validation Tests

The API rejects missing or empty text fields, invalid publication years, invalid prices and duplicate IDs.

Additional tests include retrieving a nonexistent book, requesting an invalid route and submitting malformed JSON.

Expected HTTP status codes include:

- 200 — Successful GET request
- 201 — Book created
- 400 — Invalid request data
- 404 — Resource or route not found
- 409 — Duplicate book ID
- 500 — Unexpected server error

## Project Structure

- `controllers/bookController.js` — Handles book operations.
- `routes/bookRoutes.js` — Defines API routes.
- `middleware/validateBookInput.js` — Validates incoming book data.
- `middleware/errorHandler.js` — Handles errors centrally.
- `index.js` — Configures and starts the Express server.

## Data Storage

Books are stored temporarily in memory. The collection resets to the two initial books whenever the server restarts.
