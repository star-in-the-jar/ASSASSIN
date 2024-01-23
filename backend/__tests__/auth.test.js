const request = require('supertest');
const app = require('../index');
const {exp} = require("qrcode/lib/core/galois-field");
const base32 = require("jsonwebtoken");
const authenticator = require("otplib").authenticator;
describe('Patient Authentication and Profile Tests', () => {
    let patientToken;
    let secretcode;
    let decode;

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

    test('Patient Generate 2fa secret - POST /api/patient/generate-2fa-secret', async () => {
        const response = await request(app)
            .post('/api/patient/generate-2fa-secret')
            .set('Authorization', `Bearer ${patientToken}`);
        expect(response.statusCode).toBe(200);
        secretcode = response.body.secret;

    });

    test('Patient Verify OTP - POST /api/patient/verify-otp', async () => {
        const generatedOtp = authenticator.generate(secretcode);
        decode = generatedOtp;
        const response = await request(app)
            .post('/api/patient/verify-otp')
            .send({
                "token": `${generatedOtp}`
            })
            .set('Authorization', `Bearer ${patientToken}`);
        expect(response.statusCode).toBe(200);
    });

    // test('Patient 2-Step-Login - POST /api/patient/login-step2', async () => {
    //     const response = await request(app)
    //         .post('/api/patient/login')
    //         .send({
    //             "authInfo": {
    //                 "login": "TESTING12308",
    //                 "password": "testing23324324"
    //             }
    //         });
    //     expect(response.body.twofaEnabled).toBe(true);
    //     const loginstep2code = response.body.loginStep2VerificationToken
    //
    //     const loginstep2response = await request(app)
    //         .post('/api/patient/login-step2')
    //         .send({
    //             "loginStep2VerificationToken": `${loginstep2code}`,
    //             "twofaToken": `${decode}`
    //         });
    //     expect(loginstep2response.statusCode).toBe(200);
    // });
});
