import app from "./app";

import request from "supertest";

describe("POST /register", () => {
	it("returns status code 201 if first name is passed", async () => {
		const res = await request(app)
			.post("/register")
			.send({ firstName: "John"});

		expect(res.statusCode).toEqual(201);
	});

	it("returns bad request if firstname is missing", async () => {
		const res = await request(app).post("/register").send();
		expect(res.statusCode).toEqual(400);
	});
});


describe("GET /replay", () => {
	it("returns a json", async () => {
		const res = await request(app).get("/replay").send();
		expect(res.statusCode).toEqual(200);
	});
});
