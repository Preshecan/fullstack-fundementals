const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const db = require('./config/dbConnection');

dotenv.config({path: './config/config.env'});

db.authenticate()
	.then(() => console.log('Database connected...'))
	.catch(err => console.log('Error: ' + err))

const todoList = require('./routes/todoList');

const app = express();

app.use(express.json());
app.use('/api/v1/todoList', todoList);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));