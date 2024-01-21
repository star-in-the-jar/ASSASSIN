const request = require('supertest');
const app = require('../index');

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = await request(app).get("/api/hospitals");
        await expect(response.statusCode).toBe(200);
    });
});
