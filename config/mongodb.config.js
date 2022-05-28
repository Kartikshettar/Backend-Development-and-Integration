const mongoose = require('mongoose');
const url = 'mongodb://localhost/shopdb';
exports.configure = function () {
    mongoose.Promise = global.Promise;
    mongoose.connection.on('error', function (err) {
        console.error(err);
    });
    mongoose.connection.once('open', () => {
        console.log('[+] Connected to database successfully');
    });

    return mongoose.connect(url, {
       
        keepAlive: true,
        useNewUrlParser: true,
    });
};

