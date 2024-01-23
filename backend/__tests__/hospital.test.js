const request = require('supertest');
const app = require('../index');

describe("Hospital Controller Get ALL TEST", () => {
    test("It should response the GET method", async () => {
        const getResponse = await request(app).get("/api/hospitals");
        await expect(getResponse.statusCode).toBe(200);
    });
});
describe('Hospital Controller POST TEST', () => {
    test('Add Hospital - POST /api/hospitals', async () => {
        const createResponse = await request(app)
            .post('/api/hospitals')
            .send({
                "name": "Hospital",
                "role": "hospital",
                "authInfo": {
                    "login": "hospital_username",
                    "password": "hospital_password"
                },
                "address": {
                    "street": "Hospital Street",
                    "zipCode": "12345",
                    "city": "Hospital City"
                }
            });
        const createdHospitalId = createResponse.body.hospital._id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Hospital created successfully');
    });
});

describe('Get Hospital by ID - GET /api/hospitals/:hospitalId', () => {
    test('It should retrieve a hospital by its ID after we create the hospital', async () => {
        const createResponse = await request(app)
            .post('/api/hospitals')
            .send({
                "name": "Hospital",
                "role": "hospital",
                "authInfo": {
                    "login": "hospital_username",
                    "password": "hospital_password"
                },
                "address": {
                    "street": "Hospital Street",
                    "zipCode": "12345",
                    "city": "Hospital City"
                }
            });
        expect(createResponse.statusCode).toBe(201);
        const createdHospitalId = createResponse.body.hospital._id;
        const getResponse = await request(app).get(`/api/hospitals/${createdHospitalId}`);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.hospital.name).toBe('Hospital');
        expect(getResponse.body.hospital.role).toBe('hospital');
    });
});
describe('DELETE Hospital by ID - DELETE /api/hospitals/:hospitalId', () => {
    test('Delete Hospital after we add one ', async () => {
        const createResponse = await request(app)
            .post('/api/hospitals')
            .send({
                "name": "HospitalToDelete",
                "role": "hospital",
                "authInfo": {
                    "login": "hospital_username",
                    "password": "hospital_password"
                },
                "address": {
                    "street": "Hospital Street",
                    "zipCode": "12345",
                    "city": "Hospital City"
                }
            });

        const createdHospitalId = createResponse.body.hospital._id;
        const deleteResponse = await request(app).delete(`/api/hospitals/${createdHospitalId}`);

        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toBe('Hospital deleted successfully');

        const getDeletedHospitalResponse = await request(app).get(`/api/hospitals/${createdHospitalId}`);
        expect(getDeletedHospitalResponse.statusCode).toBe(404);
    });
});

describe('UPDATE Hospital - PUT /api/hospitals/:id', () => {
    test('UPDATE Hospital after we add one', async () => {
        const createResponse = await request(app)
            .post('/api/hospitals')
            .send({
                "name": "Hospital",
                "role": "hospital",
                "authInfo": {
                    "login": "hospital_username",
                    "password": "hospital_password"
                },
                "address": {
                    "street": "Hospital Street",
                    "zipCode": "12345",
                    "city": "Hospital City"
                }
            });

        const createdHospitalId = createResponse.body.hospital._id;

        const editResponse = await request(app)
            .put(`/api/hospitals/${createdHospitalId}`)
            .send({
                "name": "EDITEDHospital",
                "role": "hospital",
                "authInfo": {
                    "login": "hospital_username",
                    "password": "hospital_password"
                },
                "address": {
                    "street": "Hospital Street",
                    "zipCode": "12345",
                    "city": "Hospital City"
                }
            });

        expect(editResponse.statusCode).toBe(200);
        expect(editResponse.body.message).toBe('Hospital updated successfully');

        const getEditedHospitalResponse = await request(app).get(`/api/hospitals/${createdHospitalId}`);
        await request(app).delete(`/api/hospitals/${createdHospitalId}`);
        expect(getEditedHospitalResponse.statusCode).toBe(200);
        expect(getEditedHospitalResponse.body.hospital.name).toBe('EDITEDHospital');

    });
});

