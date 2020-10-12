

let commonPage = require('../lib/commonPage.js');
let homePage = require('../lib/homePage.js');
let loginPage = require('../lib/loginPage.js');
let sampleData = require('../data/sampleData.js');

const { Given, When, Then, setDefaultTimeout } = require('cucumber');
const { browser } = require('protractor');
const expect = require('chai').expect;
setDefaultTimeout(60 * 1000);


Given('user launch the caring square web application', async function () {
    commonPage.commonPage.launchUrl();
    commonPage.commonPage.waitForDisplayedObject(commonPage.commonPage.homePageLink);
});

Then('the user is on caring square homepage', async function () {
    await commonPage.commonPage.verifyObjectIsDisplayed(commonPage.commonPage.registerLink);
    await commonPage.commonPage.verifyObjectIsDisplayed(homePage.homePage.homePageReasonText);
    await commonPage.commonPage.verifyObjectIsDisplayed(homePage.homePage.homePageHowText);
    
});

When('the user clicks on Register link', async function () {   
    await commonPage.commonPage.waitForDisplayedObject(commonPage.commonPage.registerLink);
    await commonPage.commonPage.clickOnObject(commonPage.commonPage.registerLink);
    
});

Then('the user is navigated to registration page', async function () {
    await commonPage.commonPage.waitForDisplayedObject(loginPage.loginPage.registerEmailField);
    
    
});

Then('the user is provided with email, password and confirm password fields', async function () {
    commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerEmailField);
    commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerPasswordField);
    commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerConfirmPasswordField);
    await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerButton);
    
});

When('the user enters invalid options for registration',async function(){
    await commonPage.commonPage.clickOnObject(loginPage.loginPage.registerButton);
    await commonPage.commonPage.waitForDisplayedObject(loginPage.loginPage.errorMessageObj);
});

Then('the error messages are displayed to the user', async function () {
    await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.invalidEmailMessage);
    await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.invalidPwdMessage);
    
});

When('the user clicks on login link',async function(){
    await commonPage.commonPage.waitForDisplayedObject(commonPage.commonPage.loginLink);
    await commonPage.commonPage.clickOnObject(commonPage.commonPage.loginLink);
    await commonPage.commonPage.waitForDisplayedObject(loginPage.loginPage.loginHeader);
});

Then('the user is redirected to login page', async function () {
    commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerEmailField);
    commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerPasswordField);
    await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.loginButton);
    
});

When('user enters invalid credentials as {string} and {string} and click on login',async function(string, string2){
    
    commonPage.commonPage.enterValue(loginPage.loginPage.registerEmailField, string);
    commonPage.commonPage.enterValue(loginPage.loginPage.registerPasswordField, string2);
    await commonPage.commonPage.clickOnObject(loginPage.loginPage.loginButton);
    
});

Then('the invalid credential error message is displayed to the user', async function () {
    await commonPage.commonPage.waitForDisplayedObject(loginPage.loginPage.invalidEmailError);
    await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.invalidEmailError);
    //await commonPage.commonPage.verifyObjectIsDisplayed(loginPage.loginPage.registerPasswordField);
    
});