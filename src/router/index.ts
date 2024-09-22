import express from "express";
import authentication from "./authentication";

import users from "./users";
import books from "./books";
const router = express.Router();

export default (): express.Router => {
	authentication(router);
	users(router);
	books(router);
	return router;
};
