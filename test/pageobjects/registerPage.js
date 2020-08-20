const expectChai = require('chai').expect;
class registerPage  {
    get signInLink() { return $('#header > div.nav > div > div > nav > div.header_user_info > a') }
    get emailAdd() { return $('input#email')};
    get password() { return $('input#passwd')};
    get submitBtn() { return $('button#SubmitLogin > span')};
    get genderBtn1() {return $('#id_gender1')};
    get firstName() {return $('#customer_firstname')};
    get lastName() {return $('#customer_lastname')};
    get newEmail() {return  $('#email')};
    get newPassword() {return  $('#passwd')};
    get daysBox () {return $('#days > option:nth-child(2)')};
    get MonthBox () {return  $('#months > option:nth-child(4)')};
    get yearBox() {return  $('#years > option:nth-child(23)')};
    get newsletter() {return  $('#newsletter')};
    get offer() {return $('#optin')};
    get addFirstName() {return $('#firstname')}
    get addLastName() {return $('#lastname')}
    get company() {return  $('#company')};
    get address() {return $('#address1')};
    get city() {return $('#city')};
    get zipCode() {return  $('#postcode')};
    get state() {return $('#id_state')};
    getMobilePhone() {return $('#phone_mobile')};
    getAlias () {return $('#alias')};
    getRegisterBtn() {return $('#submitAccount > span')};
    get registerSuccess() {return $('#center_column >p')};

    registerPage(randomEmail, randomPassword, randomCompany, randomFirstName, randomLastName, randomCity, randomState, randomZipCode)
    {
            this.signInLink.click();
            this.emailAdd.setValue(randomEmail);
            this.password.setValue(randomPassword);
            this.submitBtn.click();
            this.genderBtn1.click();
            this.firstName.setValue(randomFirstName);
            this.lastName.setValue(randomLastName);
            this.newEmail.setValue(randomEmail);
            this.newPassword.setValue(randomEmail);
            this.daysBox.selectByIndex(2);
            this.MonthBox.selectByIndex(4);
            this.yearBox.selectByIndex(23);
            this.newsletter.click();
            this.offer.click();
            this.addFirstName.setValue(randomFirstName);
            this.addLastName.setValue(randomLastName);
            this.company.setValue(randomCompany);
            this.address.setValue('villa rose');
            this.city.setValue(randomCity);
            this.zipCode.setValue(randomZipCode);
            this.state.setValue(randomState);
            this.getMobilePhone.setValue(12789000078);
            this.getAlias.setValue(randomEmail);
            this.getRegisterBtn.submit();
            const expectedMessage = this.registerSuccess.getText();
            console.log(expectedMessage);
            expectChai('welcome to your account. Here you can manage all of your personal information and orders')
        }
    }
module.exports = new registerPage();