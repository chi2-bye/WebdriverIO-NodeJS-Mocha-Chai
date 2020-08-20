//
// var faker = require('faker');
//
// describe('register', () => {
//     var randomFirstName = faker.name.firstName();
//     var randomLastName = faker.name.lastName();
//     var randomEmail = faker.internet.email();
//     it('check that user can register successfully', () => {
//         browser.url('/index.php')
//         expect(browser).toHaveTitle('My Store');
//
//         //locator identifiers
//
//         const signInButton = $(`#header > div.nav > div > div > nav > div.header_user_info > a`);
//         const createAccount = $('#email_create');
//         const createAnAccountBtn = $('#SubmitCreate > span');
//         const mrs = $('#id_gender2');
//         const firstName = $('#customer_firstname');
//         const lastName = $('#customer_lastname');
//         const email = $('#email');
//         const password = $('#passwd');
//         const daysBox = $('#days > option:nth-child(2)');
//         const MonthBox = $('#months > option:nth-child(4)');
//         const yearBox = $('#years > option:nth-child(23)');
//         const newsletter = $('#newsletter');
//         const offer = $('#optin');
//         const addFirstName = $('#firstname');
//         const addLastName = $('#lastname');
//         const company = $('#company');
//         const address = $('#address1');
//         const city = $('#city');
//         const zipCode = $('#postcode');
//         const state = $('#id_state');
//         const mobileNumber = $('#phone_mobile');
//         const alias = $('#alias');
//         const registerBtn = $('#submitAccount > span');
//         const registerSuccess = $('#center_column > p');
//
//         // call the actions
//
//         signInButton.click();
//         browser.maximizeWindow();
//         createAccount.waitForDisplayed(3000);
//         createAccount.setValue(randomEmail);
//         createAnAccountBtn.click();
//         mrs.click();
//         firstName.setValue(randomFirstName);
//         lastName.setValue(randomLastName);
//         email.setValue(randomEmail);
//         password.setValue('markuy867');
//         $('#days').selectByIndex(4);
//         $('#months').selectByIndex(4);
//         $('#years').selectByIndex(23);
//         newsletter.click();
//         offer.click();
//         addFirstName.setValue('cindy');
//         addLastName.setValue('jeff');
//         company.setValue('healthcare');
//         address.setValue('london way');
//         $('#city').setValue('boston');
//         $('#postcode').setValue(40170);
//         $('#id_state').selectByIndex(5);
//         $('#phone_mobile').setValue(78900098);
//         alias.setValue('georgia road')
//         browser.pause(1000)
//         registerBtn.click();
//         browser.pause(5000);
//         expect(registerSuccess).toBeDisplayed();
//
//     })
// })