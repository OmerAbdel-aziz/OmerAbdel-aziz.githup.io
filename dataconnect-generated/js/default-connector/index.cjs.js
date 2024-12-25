const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'gh-college',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

