<div align="center">
<pre>
██╗     ██╗██████╗ ██████╗  █████╗ ██████╗ ██╗   ██╗     █████╗ ██████╗ ██╗
██║     ██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝    ██╔══██╗██╔══██╗██║
██║     ██║██████╔╝██████╔╝███████║██████╔╝ ╚████╔╝     ███████║██████╔╝██║
██║     ██║██╔══██╗██╔══██╗██╔══██║██╔══██╗  ╚██╔╝      ██╔══██║██╔═══╝ ██║
███████╗██║██████╔╝██║  ██║██║  ██║██║  ██║   ██║       ██║  ██║██║     ██║
╚══════╝╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝       ╚═╝  ╚═╝╚═╝     ╚═╝
---------------------------------------------------
Library API to best organize YOUR library!
</pre>
</div>
  
## Description

A RESTful API for managing a library's book collection and user borrowing system. This project aims to provide a scalable and maintainable solution for library management.

## Features

- **Book Management**: Create, read, update, and delete books with details such as title, author, and description.
- **User Management**: Create and manage user accounts for borrowing books.
- **Borrowing System**: Allow users to borrow and return books with tracking of borrowing history and due dates.
- **Scalable and Maintainable**: Designed to handle a large number of books and users, with a modular architecture for easy maintenance and updates.

## API Endpoints

**Book Endpoints**

- **GET /books**: Retrieve a list of all books in the library
  - Response: JSON array of book objects
  - Example: `[{ id: 1, title: "Book 1", author: "Author 1" }, { id: 2, title: "Book 2", author: "Author 2" }]`
- **GET /books/:id**: Retrieve a single book by ID
  - Response: JSON book object
  - Example: `{ id: 1, title: "Book 1", author: "Author 1" }`
- **POST /books**: Create a new book
  - Request Body: JSON book object (title, author, description, etc.)
  - Response: JSON book object with new ID
  - Example: `{ id: 3, title: "New Book", author: "New Author" }`
- **PUT /books/:id**: Update an existing book
  - Request Body: JSON book object (title, author, description, etc.)
  - Response: JSON book object with updated fields
  - Example: `{ id: 1, title: "Updated Book", author: "Updated Author" }`
- **DELETE /books/:id**: Delete a book by ID
  - Response: JSON success message
  - Example: `{ message: "Book deleted successfully" }`

**User Endpoints**

- **POST /users**: Create a new user
  - Request Body: JSON user object (username, password, email, etc.)
  - Response: JSON user object with new ID
  - Example: `{ id: 1, username: "newuser", email: "newuser@example.com" }`
- **GET /users/:id**: Retrieve a single user by ID
  - Response: JSON user object
  - Example: `{ id: 1, username: "newuser", email: "newuser@example.com" }`
- **PUT /users/:id**: Update an existing user
  - Request Body: JSON user object (username, password, email, etc.)
  - Response: JSON user object with updated fields
  - Example: `{ id: 1, username: "updateduser", email: "updateduser@example.com" }`
- **DELETE /users/:id**: Delete a user by ID
  - Response: JSON success message
  - Example: `{ message: "User deleted successfully" }`

**Borrowing Endpoints**

- **POST /borrow**: Borrow a book
  - Request Body: JSON borrow object (book ID, user ID)
  - Response: JSON borrow object with new ID
  - Example: `{ id: 1, bookId: 1, userId: 1, borrowDate: "2023-02-20" }`
- **GET /borrow**: Retrieve a list of all borrowed books
  - Response: JSON array of borrow objects
  - Example: `[{ id: 1, bookId: 1, userId: 1, borrowDate: "2023-02-20" }, { id: 2, bookId: 2, userId: 2, borrowDate: "2023-02-21" }]`
- **PUT /borrow/:id**: Return a borrowed book
  - Request Body: JSON return object (return date)
  - Response: JSON borrow object with updated return date
  - Example: `{ id: 1, bookId: 1, userId: 1, borrowDate: "2023-02-20", returnDate: "2023-02-25" }`

## Technical Details

- Built using Node.js, Express.js, Mongoose, and Jest
- Utilizes MongoDB for data storage
- Implemented authentication and authorization using JSON Web Tokens

## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/library-api.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Use a tool like Postman or cURL to test API endpoints
