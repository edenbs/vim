const dal = require('./dal');

module.exports.createOrUpdate = req => {
    const data = req.body.payload;
    // Verify the given data using joi
    // In order to make sure everything was given in the right format and no extra data was sent

    dal.createOrUpdate(data);
};