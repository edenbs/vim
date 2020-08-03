const axios = require('axios');

const publish = (channel, payload, metadata) => {
    return axios.post(`${process.env.PUBSUB_BASE_URL}/publish`, {
        channel,
        payload,
        metadata
    });
};

const subscribe = (channel, address) => {
    return axios.post(`${process.env.PUBSUB_BASE_URL}/subscribe`, {
       channel,
       address
    });
};

subscribe('addProvider', 'http://localhost:3500/providers');

module.exports = {
    publish,
    subscribe
};