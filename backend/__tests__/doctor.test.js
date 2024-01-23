const request = require('supertest');
const app = require('../index');

describe("Doctors Controller Get ALL TEST", () => {
    test("It should response the GET method", async () => {
        const getResponse = await request(app).get("/api/doctors");
        await expect(getResponse.statusCode).toBe(200);
    });
});
describe('Doctors Controller POST TEST', () => {
    test('Add Doctor - POST /api/doctors', async () => {
        const createResponse = await request(app)
            .post('/api/doctors')
            .send({
                    "surname": "Surname"
                }
            );
        const createdDoctorId = createResponse.body.doctor._id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Doctor created successfully');
        request(app).delete(`api/doctors/${createdDoctorId}`)
    });
});
describe('Get Doctor by ID - GET /api/hospitals/:doctorId', () => {
    test('It should retrieve a doctor by its ID after we create the doctor', async () => {
        const createResponse = await request(app)
            .post('/api/doctors')
            .send({
                "surname": "Surname"
            });
        const createdDoctorId = createResponse.body.doctor._id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Doctor created successfully');
        const getResponse = await request(app).get(`/api/doctors/${createdDoctorId}`);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.surname).toBe('Surname');
        request(app).delete(`api/doctors/${createdDoctorId}`);
    });
});

describe('DELETE Doctors by ID - DELETE /api/doctors/:doctorId', () => {
    test('Delete Doctor after we add one ', async () => {
        const createResponse = await request(app)
            .post('/api/doctors')
            .send({
                "surname": "Surname"
            });

        const createdDoctorId = createResponse.body.doctor._id;
        const deleteResponse = await request(app).delete(`/api/doctors/${createdDoctorId}`);
        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toBe('Doctor deleted successfully');
    });
});

describe('UPDATE Doctors by ID - UPDATE /api/doctors/:doctorId', () => {
    test('Update Doctor after we add one', async () => {
        const createResponse = await request(app)
            .post('/api/doctors')
            .send({
                    "surname": "xd"
                });
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Doctor created successfully');
        const createdDoctorId = createResponse.body.doctor._id;
        console.log('Created Doctor ID:', createdDoctorId);

        const updateResponse = await request(app)
            .put(`/api/doctors/${createdDoctorId}`)
            .send({
                "surname": "EditedSurname"
            });
        expect(updateResponse.statusCode).toBe(200);
        const deleteResponse = await request(app).delete(`/api/doctors/${createdDoctorId}`);
        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toBe('Doctor deleted successfully');
    });
});

