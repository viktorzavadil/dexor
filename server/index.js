'use strict';

const express = require('express'),
    path = require('path'),
    winston = require('winston'),
    logger = winston.loggers.add('server', {
        console: {
            level: 'debug',
            colorize: true,
            label: 'server'
        }
    });

var port = 8888;

express()
    .use(require('prerender-node'))
    .use('/static', express.static('public/static'))
    .get('/app.js', function (req, res) {
        logger.info('js loaded');
        res.sendFile(path.join(__dirname + '/../dist/app.js'));
    })
    .get('*', function (req, res) {
        logger.info('get index');
        res.sendFile(path.join(__dirname + '/../dist/index.html'));
    })
    .listen(port, function () {
        logger.info('listening port ' + port);
    });