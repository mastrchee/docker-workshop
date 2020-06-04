const app = require('express')();
const version = require('../package.json').version;

app.get('/api/nodeapp/status', (req, res) => res.send({
    message: 'OK',
    version
}));
app.get('/', (req, res) => res.send({
    message: 'Hello world!'
}));
app.get('/api/node-app', (req, res) => res.send({
    message: 'Hello world!'
}));
module.exports = app;
