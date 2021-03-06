const express = require('express');

const routing = require('./routing');
const middlewares = require('./middlewares');
require('./database/db')();

const app = express();
app.use(express.static('frontend'));

middlewares.register(app);
routing.register(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT);

console.log(`Listening on port ${PORT} ...`);