const {AsyncRouter} = require('express-async-router');
const controller = require('./controller');

const router = new AsyncRouter();

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;