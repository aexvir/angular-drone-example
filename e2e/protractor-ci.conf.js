const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  'chromeOptions': {
    args: ['--headless', '--no-sandbox']
  },
  'acceptInsecureCerts': true
};

config.seleniumAddress = 'http://chrome:4444/wd/hub';
config.directConnect = true;
exports.config = config;
