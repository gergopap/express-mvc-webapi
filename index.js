const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const flats = require('./controller/flats');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/flats', flats);

app.listen(3000);
