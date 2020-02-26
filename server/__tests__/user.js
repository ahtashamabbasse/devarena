const request = require('supertest');
const app = require('../app');


describe('User Registration', () => {
    it('Name should be between 2 - 30', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'D',
                email: 'abcd@gmail.com',
                password: '123456',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.type).toBe('application/json');
        expect(res.body).hasOwnProperty('name');
        expect(res.body.name).toEqual("Name must be between 2 and 30 character.")
    });
    it('Missing email value ', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                password: '123456',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.type).toBe('application/json');
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toEqual("Email field is required.")
    });

    it('Missing password value ', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email: 'abcd@gmail.com',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.type).toBe('application/json');
        expect(res.body).hasOwnProperty('password');
        expect(res.body.password).toEqual("Password field is required.")
    });

    it('Password and confirm password not match', async () => {
        const res = await request(app)
            .post('/api/users/register')
            .send({
                name: 'David',
                email: 'abcd@gmail.com',
                password: '1234561',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.type).toBe('application/json');
        expect(res.body).hasOwnProperty('password');
        expect(res.body.password).toEqual("Password should be matched.")
    });

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
        expect(res.type).toBe('application/json');
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
                password: '123456',
                cpassword: '123456'
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toBe('Email is already exist.')
    });

});


describe('User Login', () => {
    it('Login user email missing', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                password: '123456',
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toBe('Email field is required.');
    });


    it('Login user email validation', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'abcd',
                password: '123456',
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toBe('Email is not valid.');
    });

    it('User Not found', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'abcda@gmail.com',
                password: '123456',
            });
        expect(res.statusCode).toEqual(404);
        expect(res.body).hasOwnProperty('email');
        expect(res.body.email).toBe('Email is not exist.');
    });

    it('Password limit validation', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'abcd@gmail.com',
                password: '1',
            });
        expect(res.statusCode).toEqual(400);
        expect(res.body).hasOwnProperty('password');
        expect(res.body.password).toBe('Password must be at least 6 character.');
    });


    it('Login user', async () => {
        const res = await request(app)
            .post('/api/users/login')
            .send({
                email: 'abc@gmail.com',
                password: '123456',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.type).toBe('application/json');
        expect(res.body).hasOwnProperty('success');
        expect(res.body.success).toBe(true);
        expect(res.body).hasOwnProperty('token')
    });


});