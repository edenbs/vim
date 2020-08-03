require('dotenv/config');
const PORT = process.env.PORT;
const logger = require('./components/logger');
const createApp = require('./config/express');
require('./api/providers/dal');
const app = createApp();

app.listen(PORT, () => {
    logger.info(`Server is listening on port ${PORT}`);
});
