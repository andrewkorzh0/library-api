// tests/auth.test.js
import { authenticationToken } from "../../secrets";
import { app } from "../../index";
const request = require("supertest");

describe("Creation, faulty creation and deletion of users.", () => {
	var testEmail = Math.floor(Math.random() * 10000000000000) + "@test.com";
	var testUserId: any;
	it("should register a new user successfully", async () => {
		const response = await request(app)
			.post("/auth/register")
			.send({
				email: testEmail, //Generate random email
				password: "test",
				username: "test",
			})
			.expect("Content-Type", /json/)
			.expect(200);

		testUserId = response.body._id;
		expect(response.body).toHaveProperty("_id");
		expect(response.body).toHaveProperty("email", testEmail);
		expect(response.body).toHaveProperty("username", "test");
	});

	it("should return an error for missing fields", async () => {
		const response = await request(app)
			.post("/auth/register")
			.send({
				email: testEmail,
				password: "test",
				// Missing username
			})
			//.expect("Content-Type", /json/)
			.expect(400); // Adjust the expected status code based on your API

		//expect(response.body).toHaveProperty("error");
	});

	it("should be able to update the user " + testEmail, async () => {
		var authToken: string;
		const loginResponse = await request(app)
			.post("/auth/login")
			.send({
				email: testEmail,
				password: "test",
			})
			//.expect("Content-Type", /json/)
			.expect(200);

		authToken = loginResponse.body.authentication.sessionToken;
		console.log(authToken);
		const response = await request(app)
			.patch(`/users/${testUserId}`)
			.set("Cookie", `${authenticationToken}=${authToken}`) // Include the token in the request header
			.send({
				username: "updated",
			})
			//.expect("Content-Type", /json/)
			.expect(200);

		expect(response.body.username).toBe("updated");
	});

	it("should be able to get all users", async () => {
		var authToken: string;
		const loginResponse = await request(app)
			.post("/auth/login")
			.send({
				email: testEmail,
				password: "test",
			})
			//.expect("Content-Type", /json/)
			.expect(200);

		authToken = loginResponse.body.authentication.sessionToken;
		console.log(authToken);
		const response = await request(app)
			.get("/users")
			.set("Cookie", `${authenticationToken}=${authToken}`) // Include the token in the request header
			//.expect("Content-Type", /json/)
			.expect(200);

		expect(Array.isArray(response.body)).toBe(true);
		expect(response.body.length).toBeGreaterThan(0);
		expect(response.body[0]).toHaveProperty("_id");
		expect(response.body[0]).toHaveProperty("email");
		expect(response.body[0]).toHaveProperty("username");
	});

	it("should be able to delete the user " + testEmail, async () => {
		var authToken: string;
		const loginResponse = await request(app)
			.post("/auth/login")
			.send({
				email: testEmail,
				password: "test",
			})
			//.expect("Content-Type", /json/)
			.expect(200);

		authToken = loginResponse.body.authentication.sessionToken;
		console.log(authToken);
		const response = await request(app)
			.delete(`/users/${testUserId}`)
			.set("Cookie", `${authenticationToken}=${authToken}`) // Include the token in the request header
			//.expect("Content-Type", /json/)
			.expect(200);
	});
});
