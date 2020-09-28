const NodeGeocoder = require('node-geocoder');

const options = {
  provider: process.env.GEOCOODER_PROVIDER,
  httpAdapter: 'https',
  apiKey: process.env.GEOCOODER_API_KEY,
  formatter: null,
};

const geocoder = NodeGeocoder(options);

module.exports = geocoder;
