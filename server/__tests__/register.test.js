const request = require('supertest');
const app = require('../server');

describe('POST /register', () => {
    it('should register a new user', async() => {
        const user = {
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123'
        };

        const response = await request(app)
            .post('/register')
            .send(user);

        // Expect status code 200 + to be a json + success message
        expect(response.status).toBe(200);
        expect(response.type).toEqual(expect.stringContaining('json'));
        expect(response.body).toHaveProperty('message', 'User registered sucessfully.');
    });

    it('should return an error if email is taken', async() => {
        const user = {
            name: 'Example',
            email: 'example@example.com',
            password: 'password123'
        };

        const response = await request(app)
            .post('/register')
            .send(user);
        
        expect(response.status).toBe(400);
        expect(response.type).toEqual(expect.stringContaining('json'));
        expect(response.body).toHaveProperty('error', 'Email is already registered');

    })
})