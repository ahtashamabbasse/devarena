const request = require('supertest');
const app = require('../app');


describe('User profile ', () => {
    it('Unauthorized Profile', async () => {
        const res = await request(app)
            .get('/api/profile/')
        expect(res.statusCode).toEqual(401);
    });
});