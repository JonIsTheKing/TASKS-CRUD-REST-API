const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();
const controller = require('./controller/task.controller');

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
    const message = 'Hi, there';
    res.json({message});
});

app.use('/api/v1/tasks', controller);

app.use('*', (req, res) => {
    res.json({
        message: 'This route is not defined yet'
    });
});

module.exports = app;
