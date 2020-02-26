const mongoose = require('mongoose');
//
jest.setTimeout(10000);
//
//
// beforeAll(done => {
//     console.log('insert some data before testing')
// });
//
afterAll(done => {
    console.log('Deleting test database');
    mongoose.connection.db.dropDatabase(done);
    done();
});