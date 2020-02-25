require('dotenv').config();
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production')
    module.exports = require('./keys_prod');
else if (process.env.NODE_ENV === 'development')
    module.exports = require('./keys_dev');
else if (process.env.NODE_ENV === 'staging')
    module.exports = require('./keys_staging');