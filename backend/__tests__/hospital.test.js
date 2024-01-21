const request = require('supertest');
const app = require('../routes/hospitalRoutes');
const db = require('../db/dbConnection');

describe("Test the root path", () => {
    test("It should response the GET method", async () => {
        const response = request(app).get("http://localhost:3000/api/hospitals");
        expect(response.statusCode).toBe(200);
    });
});

// describe('Test the addLike method', () => {
//     beforeAll(() => {
//         mongoDB.connect();
//     });
//
//     afterAll((done) => {
//         mongoDB.disconnect(done);
//     });
// }