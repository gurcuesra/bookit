var base = require("../Utilities/Base.js");
var homePage = require("../Pages/Home.page.js");
var homePageData = require("../TestData/HomePageData.json");

describe('Home Page Suite', () => {
    beforeAll(()=>base.openTheApp());

    it('should verify "sign in" and "how you been?" texts', () => {
       expect(homePage.signInTextElement.getText()).toEqual(homePageData.signinText);
       expect(homePage.howYouBeenTextElement.getText()).toEqual(homePageData.howYouBeenText);
    });

    it('should verify email text', () => {
        expect(homePage.emailLabel.getText()).toEqual(homePageData.emailText);
    });

    it('should verify password text', () => {
        expect(homePage.passwordLabel.getText()).toEqual(homePageData.passwordText);
    });
});