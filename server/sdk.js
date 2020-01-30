const sharetribeIntegrationSdk = require('sharetribe-flex-integration-sdk');

// Create new SDK instance
const sdk = sharetribeIntegrationSdk.createInstance({
  clientId: process.env.SERVER_CLIENTID,
  clientSecret: process.env.SERVER_SECRET
});

module.exports = sdk;
