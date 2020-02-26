const request = require('supertest');
const app = require('../app');


describe('User Authentication', () => {
    it('Missing email value ', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                password:'123456',
                cpassword:'123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toEqual("Email field is required")
    })

    it('Missing password value ', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email:'abcd@gmail.com',
                cpassword:'123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('password');
        expect(res.body.password).toEqual("Password field is required")
    })

    it('Password and confirm password not match', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email:'abcd@gmail.com',
                password:'1234561',
                cpassword:'123456'
            });
        expect(res.statusCode).toEqual(400);
        console.log(res.body);
        expect(res.body).hasOwnProperty('password');
        expect(res.body.password).toEqual("Password should be matched")
    })

    it('Register the user', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email: 'abc@gmail.com',
                password: '123456',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).hasOwnProperty('name');
        expect(res.body).hasOwnProperty('email');
        expect(res.body).hasOwnProperty('password');
        expect(res.body).hasOwnProperty('date');

    });
    it('Register user with same credentials', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email: 'abc@gmail.com',
                password:'123456',
                cpassword:'123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toBe('Email is already exist')
    })

});