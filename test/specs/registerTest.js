const faker = require('faker');
const registerPage = require('../pageobjects/registerPage');
const randomEmail = faker.internet.email();
const randomFirstName = faker.name.firstName();
const randomLastName = faker.name.lastName();
const randomZipCode = faker.address.zipCode();
const randomCity   = faker.address.city();
const randomState = faker.address.stateAbbr();

describe('register page', () => {

    it('should allow registered name', () => {
        browser.url('/index.php');
        registerPage.signInLink.click();
        registerPage.emailAdd.setValue('caviar@gmail.com');
        registerPage.password.setValue('cucumber');
        registerPage.submitBtn.click();

    })
    it('should allow access with fake credentials', () => {
        browser.url('/index.php');
        registerPage.signInLink.click();
        registerPage.emailAdd.setValue(randomEmail);
        registerPage.password.setValue('Kettle23');
        registerPage.submitBtn.click();
    })
    it('should fill in all credentials', () => {
        browser.url('/index.php');
        registerPage.signInLink.click();
        registerPage.emailAdd.setValue(randomEmail);
        registerPage.password.setValue('solar34');
        registerPage.submitBtn.click();
        registerPage.genderBtn1.click();
        registerPage.firstName.setValue(randomFirstName);
        registerPage.lastName.setValue(randomLastName);
        registerPage.newEmail.setValue(randomEmail);
        registerPage.newPassword.setValue('zipper56');
        registerPage.daysBox.selectByIndex(2);
        registerPage.MonthBox.selectByIndex(4);
        registerPage.yearBox.selectByIndex(23);
        registerPage.newsletter.click();
        registerPage.offer.click();
        registerPage.addFirstName.setValue(randomFirstName);
        registerPage.addLastName.setValue(randomLastName);
        registerPage.company.setValue('group');
        registerPage.address.setValue('villa rose');
        registerPage.city.setValue(randomCity);
        registerPage.zipCode.setValue(randomZipCode);
        registerPage.state.selectByIndex(randomState);
        registerPage.getMobilePhone.setValue(12789000078);
        registerPage.getAlias.setValue(randomEmail);
        registerPage.getRegisterBtn.click();

    })
})


