(() => {
    const createError = require('http-errors');
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    const bodyParser = require('body-parser');

    const express = require('express');
    const apiRouter = require('./routers/api.router');
    
    const app = express();
    app.set('env', 'prod')
    
    app.use(logger('common')); // Apache common log style
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cookieParser());
    
    app.use('/api', apiRouter);

    // catch catch all and pass to error handler
    app.use((req, res, next): void => {
        next(createError(404));
    });
    
    
    // error handler
    app.use((err, req, res, next): void => {
        let status;
        let object;
        if (err.status) {
            status = 404;
            object = {
                response: {
                    message: 'Not found.'
                }
            };
        } else {
            status = 500;
            object = {
                response: {
                    message: 'Server error.'
                }
            };
        }
        // log errors
        console.log(err.stack);
        // respond
        res.status(status).json(object);
    });
    // export the app module
    module.exports = app;
})();