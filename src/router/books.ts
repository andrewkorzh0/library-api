import express from "express";

import {
	createBook,
	deleteBookById,
	getBookById,
	getBooks,
	updateBookById,
} from "../db/books";

export default (router: express.Router) => {
	router.get("/books", getBooks);
	router.get("/books/:id", getBookById);
	router.post("/books", createBook);
	router.patch("/books/:id", updateBookById);
	router.delete("/books/:id", deleteBookById);
};
