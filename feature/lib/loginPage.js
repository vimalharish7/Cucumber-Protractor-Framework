let commonPage = require('../lib/commonPage.js');

var loginPage = function () {
    this.registerHeader = element(by.cssContainingText('h2', 'Create a new account.'));
    this.registerEmailField = element(by.css('#Email'));
    this.registerPasswordField = element(by.css('#Password'));
    this.registerConfirmPasswordField = element(by.css('#ConfirmPassword'));
    this.registerButton = element(by.css('#buttonedit'));
    this.userNameTakenError = element(by.cssContainingText('li','is already taken.'));
    this.successMessage = element(by.css('div.section-title')).element(by.cssContainingText('p','Hi,'));
    this.invalidEmailMessage = element(by.css('div[class*="validation-summary-errors"]')).element(by.cssContainingText('li','The Email field is required.'))
    this.invalidPwdMessage = element(by.css('div[class*="validation-summary-errors"]')).element(by.cssContainingText('li','The Password field is required.'))
    this.errorMessageObj = element(by.css('div[class*="text-danger"]'));
    this.loginHeader = element(by.cssContainingText('h2', 'Log in with Caring Square account'));
    this.loginButton = element(by.css('input[value="Log in"]'));
    this.invalidEmailError = element(by.cssContainingText('span','The Email field is not a valid e-mail address.'))

    this.generateRandomValue = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    this.completeRegistration = function (userName, password) {
        commonPage.commonPage.waitForObject(this.registerEmailField);
        console.log(userName)
        if (userName == "") {
            var tempUserName = this.generateRandomValue(8);
            tempUserName += "@gmail.com"
            commonPage.commonPage.enterValue(this.registerEmailField,tempUserName);
            console.log(tempUserName);
        }else{
            commonPage.commonPage.enterValue(this.registerEmailField,userName);
        }
        this.registerPasswordField.sendKeys(password);
        this.registerConfirmPasswordField.sendKeys(password);
        this.registerButton.click();
    }

}
module.exports.loginPage = new loginPage();