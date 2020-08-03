const express = require('express');
const {json} = require('body-parser');
const jsonErrorHandler = require('express-json-error-handler').default;

const logger = require('../../components/logger');
const routes = require('./routes');

module.exports = () => {
    const app = express();

    app.use(json());

    routes(app);

    app.use(jsonErrorHandler({
        log({err}) {
            logger.error(err, 'Json Error Handler');
        }
    }));

    return app;
};
