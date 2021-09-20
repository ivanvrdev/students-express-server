const express = require('express');
require('dotenv').config();

require('./connection');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//port setting
app.set('port', process.env.PORT || 4000);

//routes

app.use(require('./routes/students.routes'));

app.listen(app.get('port'), ()=>console.log(`Server run on port ${app.get('port')}`));