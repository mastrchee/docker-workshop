const log = require('pino')();
const app = require('./lib/app');
const config = require('./lib/config');

if(!config.port) {
    log.info('Missing PORT env variable, Shutting down')
    process.exit();
}
const server = app.listen(config.port, () => {
    log.info(`Listening on port ${config.port}.`);
});

server.on('close', () => {
    log.info('Shutting down gracefully');
});

process.on('SIGTERM', () => {
    log.info('Received SIGTERM event.');
    server.close();
});

process.on('uncaughtException', err => {
    server.close();
});
