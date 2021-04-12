const path = require('path');
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
if(process.env.NODE_ENV === 'development')app.use(morgan('dev'));
app.use('/api/v1/todoList', todoList);

if(process.env.NODE_ENV  === 'production'){
	console.log('production');
	app.use(express.static('my-app/build'));
	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));