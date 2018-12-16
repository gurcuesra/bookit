var Base = function(){
    this.url ="https://cybertek-reservation-qa.herokuapp.com/sign-in";
    this.openTheApp = function(){
        browser.waitForAngularEnabled(false);
        browser.get(this.url);
    }
}

module.exports = new Base();