import express from "express";

import {
	deleteBookById,
	getBookById,
	getBooks,
	createBook,
	updateBookById,
} from "../db/books";

export const getAllBooks = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const books = await getBooks();

		return res.status(200).json(books);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const getBook = async (req: express.Request, res: express.Response) => {
	try {
		const { id } = req.params;

		const book = await getBookById(id);

		return res.status(200).json(book);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const createNewBook = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { title, author } = req.body;

		if (!title || !author) {
			return res.sendStatus(400);
		}

		const newBook = await createBook({ title, author });

		return res.status(200).json(newBook);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const updateBook = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params;
		const { title, author } = req.body;

		if (!title || !author) {
			return res.sendStatus(400);
		}

		const updatedBook = await updateBookById(id, { title, author });

		return res.status(200).json(updatedBook);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export const deleteBook = async (
	req: express.Request,
	res: express.Response
) => {
	try {
		const { id } = req.params;

		const deletedBook = await deleteBookById(id);

		return res.status(200).json(deletedBook);
	} catch (error) {
		console.log(error);
		return res.sendStatus(400);
	}
};

export default {
	getAllBooks,
	getBook,
	createNewBook,
	updateBook,
	deleteBook,
};
