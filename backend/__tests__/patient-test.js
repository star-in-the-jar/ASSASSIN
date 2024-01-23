const request = require('supertest');
const app = require('../index');

describe("Patient Controller Get ALL TEST", () => {
    test("It should response the GET method", async () => {
        const getResponse = await request(app).get("/api/patients");
        await expect(getResponse.statusCode).toBe(200);
    });
});
describe('Patient Controller POST TEST', () => {
    test('Add Patient - POST /api/patients', async () => {
        const createResponse = await request(app)
            .post('/api/patients')
            .send({
                "name": "Patient",
                "surname": "patient",
                "authInfo": {
                    "login": "patient_username",
                    "password": "patient_password"
                },
            });
        const createdPatientId = createResponse.body.patient._id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Patient created successfully');
        await request(app).delete(`/api/patients/${createdPatientId}`);
    });
});

describe('Get Patient by ID - GET /api/patients/:patientId', () => {
    test('It should retrieve a patient by its ID after we create the patient', async () => {
        const createResponse = await request(app)
            .post('/api/patients')
            .send({
                "name": "Patient",
                "surname": "patient",
                "authInfo": {
                    "login": "patient_usernamea",
                    "password": "patient_passworda"
                },
            });
        const createdPatientId = createResponse.body.patient._id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Patient created successfully');
        const getResponse = await request(app).get(`/api/patients/${createdPatientId}`);
        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.name).toBe('Patient');
        await request(app).delete(`/api/patients/${createdPatientId}`);
    });
});
describe('DELETE Patient by ID - DELETE /api/patients/:patientId', () => {
    test('Delete Patient after we add one ', async () => {
        const createResponse = await request(app)
            .post('/api/patients')
            .send({
                "name": "PatientToDelete",
                "surname": "patient",
                "authInfo": {
                    "login": "patient_usernameb",
                    "password": "patient_passwordb"
                },
            });
        const createdPatientId = createResponse.body.patient._id;
        const deleteResponse = await request(app).delete(`/api/patients/${createdPatientId}`);

        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toBe('Patient deleted successfully');

        const getDeletedPatientResponse = await request(app).get(`/api/patients/${createdPatientId}`);
        expect(getDeletedPatientResponse.statusCode).toBe(404);
    });
});

describe('UPDATE Patient - PUT /api/patients/:id', () => {
    test('UPDATE Patient after we add one', async () => {
        const createResponse = await request(app)
            .post('/api/patients')
            .send({
                "name": "Patient",
                "surname": "patient",
                "authInfo": {
                    "login": "patient_usernamec",
                    "password": "patient_passwordc"
                },
            });

        const createdPatientId = createResponse.body.patient._id;

        const editResponse = await request(app)
            .put(`/api/patients/${createdPatientId}`)
            .send({
                "name": "EDITEDPatient",
                "surname": "patient",
                "authInfo": {
                    "login": "patient_usernamed",
                    "password": "patient_passwordd"
                },
            });
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(editResponse.statusCode).toBe(200);
        expect(editResponse.body.message).toBe('Patient updated successfully');

        const getEditedPatientResponse = await request(app).get(`/api/patients/${createdPatientId}`);
        await request(app).delete(`/api/patients/${createdPatientId}`);
        await new Promise(resolve => setTimeout(resolve, 100));
        expect(getEditedPatientResponse.statusCode).toBe(200);
        expect(getEditedPatientResponse.body.name).toBe('EDITEDPatient');

    });
});