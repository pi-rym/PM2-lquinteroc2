const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes/index');
const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(router);

module.exports = app;
