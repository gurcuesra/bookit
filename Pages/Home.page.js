var HomePage = function(){
    this.signInTextElement = $(".title");
    this.howYouBeenTextElement = $('.subtitle');
    this.emailLabel = $$('.label').get(0);
    this.passwordLabel = $$('.label').get(1);
    this.emailInputBox = element(by.name('email'));
    this.passwordInputBox = element(by.name('password'));
    this.signinButton = element(by.buttonText('sign in'));
    this.byBugBustersTextElement = $('.has-text-centered>p');
    this.gitHubLogo = $('.fa-github');
    this.questionCircleLogo = $('.fa-question-circle');
    this.emailIcon = $$('.icon.is-small.is-left').get(0);
    this.passwordIcon = $$('.icon.is-small.is-left').get(1);

}

module.exports = new HomePage();