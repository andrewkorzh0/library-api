import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose, { Error } from "mongoose";
import { getUsers } from "./db/users";
import router from "./router";

import { mongourl } from "./secrets";

export const app = express();
app.use(
	cors({
		credentials: true,
	})
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
	console.log("Server running on http://localhost:8080");
});

const MONGO_URL = mongourl;

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
