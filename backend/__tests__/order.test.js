const request = require('supertest');
const app = require('../index');


describe('Order Controller POST TEST', () => {
    test('Add Order - POST /api/patient/results', async () => {
        const createResponse = await request(app)
            .post('/api/patient/results')
            .send({
                "hospital": "65a83eaab19b10f86719f4c6", 
                "doctor": "65aecbf72ba33c2b983519cf",   
                "patient": "65a83f0fb19b10f86719f4d2",  
                "results": {
                    "wbc": "5.2",
                    "rbc": "4.5",
                    "hct": "42",
                    "mcv": "90",
                    "mch": "30",
                    "plt": "250",
                    "mpv": "8",
                    "rdw": "12",
                    "pdw": "15",
                    "hemoglobin": "14"
                }
            });
        const createdOrderId = createResponse.body.order_id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Results added successfully');
        await request(app).delete(`/api/patient/results/${createdOrderId}`);

    });
});

describe('Get Order by ID - GET /api/patient/results/:orderId', () => {
    test('It should retrieve a order by its ID after we create the order', async () => {
        const createResponse = await request(app)
            .post('/api/patient/results')
            .send({
                "hospital": "65a83eaab19b10f86719f4c6", 
                "doctor": "65aecbf72ba33c2b983519cf",   
                "patient": "65a83f0fb19b10f86719f4d2",  
                "results": {
                    "wbc": "5.2",
                    "rbc": "4.5",
                    "hct": "42",
                    "mcv": "90",
                    "mch": "30",
                    "plt": "250",
                    "mpv": "8",
                    "rdw": "12",
                    "pdw": "15",
                    "hemoglobin": "14"
                }
            });
        const createdOrderId = createResponse.body.order_id;
        expect(createResponse.statusCode).toBe(201);
        expect(createResponse.body.message).toBe('Results added successfully');
        
        await request(app).get(`/api/patient/results/${createdOrderId}`);
        expect(createResponse.statusCode).toBe(201);

        await request(app).delete(`/api/patient/results/${createdOrderId}`);
    });
});
describe('DELETE Order by ID - DELETE /api/patient/results/:orderId', () => {
    test('Delete Order after we add one ', async () => {
        const createResponse = await request(app)
            .post('/api/patient/results')
            .send({
                "hospital": "65a83eaab19b10f86719f4c6", 
                "doctor": "65aecbf72ba33c2b983519cf",   
                "patient": "65a83f0fb19b10f86719f4d2",  
                "results": {
                    "wbc": "5.2",
                    "rbc": "4.5",
                    "hct": "42",
                    "mcv": "90",
                    "mch": "30",
                    "plt": "250",
                    "mpv": "8",
                    "rdw": "12",
                    "pdw": "15",
                    "hemoglobin": "14"
                }
            });

        const createdOrderId = createResponse.body.order._id;
        const deleteResponse = await request(app).delete(`/api/patient/results/${createdOrderId}`);

        expect(deleteResponse.statusCode).toBe(200);
        expect(deleteResponse.body.message).toBe('Order deleted successfully');

        const getDeletedOrderResponse = await request(app).get(`/api/patient/results/${createdOrderId}`);
        expect(getDeletedOrderResponse.statusCode).toBe(404);
    });
});

describe('UPDATE Order - PUT /patient/results/:id', () => {
    test('UPDATE Order after we add one', async () => {
        const createResponse = await request(app)
            .post('/api/patient/results')
            .send({
                "hospital": "65a83eaab19b10f86719f4c6", 
                "doctor": "65aecbf72ba33c2b983519cf",   
                "patient": "65a83f0fb19b10f86719f4d2",  
                "results": {
                    "wbc": "5.2",
                    "rbc": "4.5",
                    "hct": "42",
                    "mcv": "90",
                    "mch": "30",
                    "plt": "250",
                    "mpv": "8",
                    "rdw": "12",
                    "pdw": "15",
                    "hemoglobin": "14"
                }
            });

        const createdOrderId = createResponse.body.order._id;

        const editResponse = await request(app)
            .put(`/api/patient/results/${createdOrderId}`)
            .send({
                "hospital": "65a83eaab19b10f86719f4c6", 
                "doctor": "65aecbf72ba33c2b983519cf",   
                "patient": "65a83f0fb19b10f86719f4d2",  
                "results": {
                    "wbc": "420",
                    "rbc": "4.5",
                    "hct": "42",
                    "mcv": "90",
                    "mch": "30",
                    "plt": "250",
                    "mpv": "8",
                    "rdw": "12",
                    "pdw": "15",
                    "hemoglobin": "14"
                }
            });

        expect(editResponse.statusCode).toBe(200);
        expect(editResponse.body.message).toBe('Order updated successfully');

        const getEditedOrderResponse = await request(app).get(`/api/patient/results/${createdOrderId}`);
        expect(getEditedOrderResponse.statusCode).toBe(200);
        if (getEditedOrderResponse.body.results) {
            expect(getEditedOrderResponse.body.results.wbc).toBe('420');
        }
        await request(app).delete(`/api/patient/results/${createdOrderId}`);
    });
});