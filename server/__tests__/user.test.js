const request = require('supertest');
const app = require('../app');


describe('User Authentication', () => {

    it('Register the user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email: 'abc@gmail.com',
                password:'123456',
                cpassword:'123456'
            });
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    })

})