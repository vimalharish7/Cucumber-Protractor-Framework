//protractor.conf.js
exports.config = {
    directConnect : true,
    getPageTimeout: 50000,
    allScriptsTimeout: 50000,
    framework: 'custom', // set to "custom" instead of cucumber.
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to this directory.
    specs: [
      'feature/*.feature'
    ],
  
    cucumberOpts: {
      require: 'feature/stepDefinition/steps.js',
      tags: false,
      // format: ['pretty'],
      profile: false,
      'no-source': true,
      SELENIUM_PROMISE_MANAGER: false
    },
    onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
      browser.ignoreSynchronization = true;
      
    }
  };