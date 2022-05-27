// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const db = require('./config/db');
// const errorHandler = require('./helper/error');
// const port = 9000;
// db.connect();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(cors());



// // api routes
// app.use('/users', require('./routes/signup.routes'));

// // global error handler
// app.use(errorHandler);

// // start server
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const errorHandler = require('./helper/error');

const connectDB = require('./config/db')
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

// api routes
app.use('/accounts', require('./routes/signup.routes'));

// swagger docs route
// app.use('/api-docs', require('./swagger/swagger'));

// global error handler
app.use(errorHandler);

// start server
const port =  9000;
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});