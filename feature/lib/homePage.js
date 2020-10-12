var homePage = function(){
    this.homePageLink = element(by.linkText('Home'));
    this.knowledgeHubLink = element(by.linkText('Knowledge Hub'));
    this.exploreLink = element(by.linkText('Explore Places'));
    this.registerLink = element(by.id('registerLink'));
    this.loginLink = element(by.id('loginLink'));
    this.homePageReasonText = element(by.cssContainingText('p','Why Caring Square ?'));
    this.homePageHowText = element(by.cssContainingText('p','How it works'));


}
module.exports.homePage = new homePage();