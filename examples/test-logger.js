var winston = require('winston');
var Postgres = require('../index.js').Postgres;
var options = require('./options');

// Copy the options.js.example file in this directory, name it options.js
// and add in your postgres credentials.
winston.add(winston.transports.Postgres, options );

// do an info log
winston.log('info', 'Hello distributed log files!', function() {
    console.log('First message logged');
});

// do another info log
winston.info('Hello again distributed logs', function() {
    console.log('Second message logged');
});

// log with metadata
winston.info('With some metadata', { tag : 'cloud' }, function() {
    console.log('Third message logged');
});

// something to ignore
winston.info('something to ignore', { tag : 'cloud' }, function() {
    console.log('Third message logged');
});
