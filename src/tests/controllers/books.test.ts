import supertest from "supertest";

import { app } from "../../index";
import { resolveProjectReferencePath } from "typescript";

const request = supertest(app);

describe("Creation, faulty creation and deletion of books.", () => {
	var testBookId: any;

	it("should create a new book successfully", async () => {
		const response = await request
			.post("/books")
			.send({
				title: "test",
				author: "test",
			})
			//.expect("Content-Type", /json/)
			.expect(200);

		testBookId = response.body._id;
		console.log(response.body);
		// expect(response.body).toHaveProperty("_id");
		// expect(response.body).toHaveProperty("title", "test");
		// expect(response.body).toHaveProperty("description", "test");
		// expect(response.body).toHaveProperty("author", "test");
	});
});
