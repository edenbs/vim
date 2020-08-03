const {AsyncRouter} = require('express-async-router');
const controller = require('./controller');

const router = new AsyncRouter();

router.post('/', controller.createOrUpdate);

module.exports = router;