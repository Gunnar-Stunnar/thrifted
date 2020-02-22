var paypal = require('paypal-rest-sdk');

const PPSDK = paypal.configure({
  'mode': process.env.PP_ENV, //sandbox or live
  'client_id': process.env.PP_CLIENTID,
  'client_secret': process.env.PP__SECRET,
  'headers' : {
    'custom': 'header'
  }
});

module.exports = PPSDK;
