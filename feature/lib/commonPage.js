const { expect } = require("chai");
const { element, browser } = require("protractor");

const EC = protractor.ExpectedConditions;

var commonPage = function () {
    this.homePageLink = element(by.linkText('Home'));
    this.knowledgeHubLink = element(by.linkText('Knowledge Hub'));
    this.exploreLink = element(by.linkText('Explore Places'));
    this.registerLink = element(by.id('registerLink'));
    this.loginLink = element(by.linkText('Log In'));

    this.launchUrl = function () {
        //https://caringsquaredeployment.azurewebsites.net/
        browser.get('https://caringsquaredeployment.azurewebsites.net/');
    }

    this.waitForObject = function (obj) {
        var isClickable = EC.elementToBeClickable(obj);
        browser.wait(isClickable, 15000);
    }

    this.waitForDisplayedObject = async function (obj) {
        var isClickable = EC.elementToBeClickable(obj);
        await browser.wait(isClickable, 15000);
    }

    this.clickOnObject = async function (obj) {
        await obj.click();
    }

    this.verifyObjectIsDisplayed = async function (object) {
        await object.isDisplayed().then(function(result){
            if(result){
                expect(result).to.equal(true);
            }else{
                expect(result).to.be(true);
                console.log('Object not displayed!');
            }

        });
    }


    this.enterValue = async function (object, value) {
        await object.clear();
        await object.sendKeys(value);
        await browser.sleep(500);
    }

    this.verifyCurrentUrl = async function (value) {
        await browser.getCurrentUrl().then(function(result) {
            expect(result).to.contain(value);
        });
    }


}
module.exports.commonPage = new commonPage();