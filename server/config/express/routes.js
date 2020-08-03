const createError = require('http-errors');
const appointmentsRoute = require('../../api/appointments');

module.exports = app => {
    app.use('/appointments', appointmentsRoute);

    app.use((req, res, next) => {
        next(createError(404, 'API doesn\'t exists'));
    })
};