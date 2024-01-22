const request = require('supertest');
const app = require('../index');
describe('Patient Authentication and Profile Tests', () => {
    let patientToken;

    afterAll(async () => {
        const deleteResponse = await request(app).delete('/api/patients/login/TESTING12308');
        expect(deleteResponse.statusCode).toBe(200);
    });

    test('Patient Signup - POST /api/patient/signup', async () => {
        const response = await request(app)
            .post('/api/patient/signup')
            .send({
                "authInfo": {
                    "login": "TESTING12308",
                    "password": "testing23324324"
                }
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('Signup successful');

        patientToken = response.body.token;
    });

    test('Patient Login - POST /api/patient/login', async () => {
        const response = await request(app)
            .post('/api/patient/login')
            .send({
                "authInfo": {
                    "login": "TESTING12308",
                    "password": "testing23324324"
                }
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toBe('Login successful');
        expect(response.body.twofaEnabled).toBe(false);
        patientToken = response.body.token;
    });


});