// describe('successfully registration', () => {
//   it('successfully registration', () => {
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
//     cy.get('[aria-label="Close Welcome Banner"]').click();

//     const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
//     const password = `testpassword${Math.floor(Math.random() * 100000)}`;
//     const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;

//     cy.get('#emailControl').type(email);
//     cy.get('#passwordControl').type(password);
//     cy.get('#repeatPasswordControl').type(password)

//     const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); // Adjust the number based on the number of options
//     cy.get('#mat-select-0').click();
//     cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();

//     cy.get('#securityAnswerControl').type(securityAnswer);

//     // Submit the registration form
//     cy.get('#registerButton').click();

//     // Assert that the registration was successful (replace with your actual success criteria)
//     cy.url().should('include', '/login'); // Check if the URL includes the success page URL
//     cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
  

//   })
// })


// describe('Unsuccessfully registrationa', () => {
//   it('Unsuccessfully registration', () => {
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
//     cy.get('[aria-label="Close Welcome Banner"]').click();
    
//         // Fill in the registration form with invalid data
//         cy.get('#emailControl').type('invalidemail'); 
//         cy.get('#passwordControl').type('123'); 
//         cy.get('#repeatPasswordControl').type('mismatched'); 
    
//         // Choose a security question (adjust the index based on your options)
//         cy.get('#mat-select-0').click();
//         cy.get('.mat-option').eq(0).click();
    
//         // Fill in the security answer
//         cy.get('#securityAnswerControl').type('answer');
    
//         cy.get('#mat-error-5').contains('Email address is not valid.');
//         cy.get('#mat-error-6').contains('Password must be 5-40 characters long.');
//         cy.get('#mat-error-7').contains('Passwords do not match');

//         // Assert that the registration button is disabled
//         cy.get('#registerButton').should('be.disabled');


//       });
//     });
    

// describe('successfully login', () => {
//   it('successfully registration', () => {
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
//     cy.get('[aria-label="Close Welcome Banner"]').click();

//     const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
//     const password = `testpassword${Math.floor(Math.random() * 100000)}`;
//     const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;

//     cy.get('#emailControl').type(email);
//     cy.get('#passwordControl').type(password);
//     cy.get('#repeatPasswordControl').type(password)

//     const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); // Adjust the number based on the number of options
//     cy.get('#mat-select-0').click();
//     cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();

//     cy.get('#securityAnswerControl').type(securityAnswer);

//     // Submit the registration form
//     cy.get('#registerButton').click();

//     // Assert that the registration was successful (replace with your actual success criteria)
//     cy.url().should('include', '/login'); // Check if the URL includes the success page URL
//     cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element

//     // You can add more assertions based on your application's behavior

//     Cypress.env('email', email);
//     Cypress.env('password', password);
    
//   });

//   it('successfull login', () => {
//     // Посетите страницу входа
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
//     cy.get('[aria-label="Close Welcome Banner"]').click();

//     // Используйте электронную почту и пароль из предыдущего теста
//     const email = Cypress.env('email'); // Получаем электронную почту из переменной окружения
//     const password = Cypress.env('password'); // Получаем пароль из переменной окружения

//     // Введите электронную почту и пароль
//     cy.get('#email').type(email);
//     cy.get('#password').type(password);

//     // Нажмите кнопку "Log in"
//     cy.get('#loginButton').click();

//     // Проверьте, что вы успешно вошли, например, проверив изменение URL
//     cy.url().should('include', '/search');

//     // Или проверьте видимость элемента, который появляется после успешной логинизации
//     cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');

//     cy.get('#navbarAccount').click();
//     cy.get('#navbarLogoutButton').click();
//   });
// });


// describe('Unsuccessfully login', () => {
//   it('Unsuccessfull login', () => {
//     // Посетите страницу входа
//     cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
//     cy.get('[aria-label="Close Welcome Banner"]').click();

//     // Введите электронную почту и пароль
//     cy.get('#email').type('example');
//     cy.get('#password').type('123');

//     // Нажмите кнопку "Log in"
//     cy.get('#loginButton').click();

//     cy.get('.error.ng-star-inserted').contains('Invalid email or password.');

//     cy.get('#loginButton').should('not.be.disabled');
    
//   });
// });






describe('successfully purchase', () => {
    it('successfully registration', () => {
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/register')
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      const email = `testuser${Math.floor(Math.random() * 100000)}@example.com`;
      const password = `testpassword${Math.floor(Math.random() * 100000)}`;
      const securityAnswer = `Answer${Math.floor(Math.random() * 100000)}`;
  
      cy.get('#emailControl').type(email);
      cy.get('#passwordControl').type(password);
      cy.get('#repeatPasswordControl').type(password)
  
      const randomSecurityQuestionIndex = Math.floor(Math.random() * 3); // Adjust the number based on the number of options
      cy.get('#mat-select-0').click();
      cy.get('.mat-option').eq(randomSecurityQuestionIndex).click();
  
      cy.get('#securityAnswerControl').type(securityAnswer);
  
      // Submit the registration form
      cy.get('#registerButton').click();
  
      // Assert that the registration was successful (replace with your actual success criteria)
      cy.url().should('include', '/login'); // Check if the URL includes the success page URL
      cy.get('.ng-tns-c70-15 .mat-simple-snack-bar-content ').should('be.visible').should('have.text', 'Registration completed successfully. You can now log in.'); // Replace with the actual success message or element
  
      // You can add more assertions based on your application's behavior
  
      Cypress.env('email', email);
      Cypress.env('password', password);
      
    });
  
    it('successfull login', () => {
      // Посетите страницу входа
      cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/login');
      cy.get('[aria-label="Close Welcome Banner"]').click();
  
      // Используйте электронную почту и пароль из предыдущего теста
      const email = Cypress.env('email'); // Получаем электронную почту из переменной окружения
      const password = Cypress.env('password'); // Получаем пароль из переменной окружения
  
      // Введите электронную почту и пароль
      cy.get('#email').type(email);
      cy.get('#password').type(password);
  
      // Нажмите кнопку "Log in"
      cy.get('#loginButton').click();
  
      // Проверьте, что вы успешно вошли, например, проверив изменение URL
      cy.url().should('include', '/search');
  
      // Или проверьте видимость элемента, который появляется после успешной логинизации
      cy.get('.heading.mat-elevation-z6 ').should('be.visible').should('have.text','All Products');
  
      cy.get('.btn-basket').first().click();
          
          const country = `country${Math.floor(Math.random() * 100000)}`;
          const name = `name${Math.floor(Math.random() * 100000)}`;
          const mobileNumber = `${Math.floor(1000000000 + Math.random() * 9000000000).toString().slice(0, 10)}`;
          const cardNumber = `${Math.floor(Math.random() * 1000000000).toString().slice(0, 16)}`;
          const zipCode = `${Math.floor(Math.random() * 100000)}`;
          const address = `address${Math.floor(Math.random() * 100000)}`;
          const city = `city${Math.floor(Math.random() * 100000)}`;
          const state = `state${Math.floor(Math.random() * 100000)}`;
  
          // Verify that the product is added to the basket
          cy.get('.mat-snack-bar-container',{ timeout: 100000 }).should('be.visible')
          cy.get('.mat-simple-snackbar.ng-star-inserted',{ timeout: 100000 }).should('be.visible').should('contain','Placed Apple Juice (1000ml) into basket.'); 
  
          // Navigate to the basket
          cy.get('[routerlink="/basket"]').click();
      
          // // Verify that the basket page is displayed
          // cy.url().should('include', '/basket');
      
          // Click on the "Checkout" button
          cy.get('[data-icon="cart-arrow-down"]').click();
  
          cy.get('.mat-button-wrapper').should('contain','Add New Address')
          cy.get('[routerlink="/address/create"]').click();
      
          // Fill in the shipping information (replace with actual form selectors and data)
          cy.get('[placeholder="Please provide a country."]').type(country);
          cy.get('[placeholder="Please provide a name."]').type(name);
          cy.get('[placeholder="Please provide a mobile number."]').type(mobileNumber);
          cy.get('#address').type(address);
          cy.get('[placeholder="Please provide a city."]').type(city);
          cy.get('[placeholder="Please provide a ZIP code."]').type(zipCode);
          cy.get('[placeholder="Please provide a state."]').type(state);
      
          // Click on the "Continue" button
          cy.contains('Submit').click();
      
          // Select the payment method (replace with actual selectors)
          cy.get('.mat-radio-inner-circle').first().click();
          cy.contains('Continue').click();
      
          cy.get('.mat-radio-inner-circle').first().click();
          cy.contains('Continue').click();
  
  
  
  
          // Fill in credit card information (replace with actual form selectors and data)
          cy.contains('Add a credit or debit card').click();
  
  
          const Name = 'John Doe';
          cy.contains('Name').parent().find('label').type(Name);
  
          // Введите номер карты
          // const cardNumber = '1234567812345678';
          cy.get('input[placeholder="Card Number"]').type(cardNumber);
  
          // Выберите месяц
          const randomMonth = Cypress._.random(1, 12);
          cy.get('select[placeholder="Expiry Month"]').select(randomMonth.toString());
  
          // Выберите год
          const randomYear = Cypress._.random(2023, 2099);
          cy.get('select[placeholder="Expiry Year"]').select(randomYear.toString());
  
          // Нажмите кнопку "Submit"
          cy.get('#submitButton').click();
  
  
        
  
  
  
  
          // cy.get('.mat-form-field-autofill-control.ng-tns-c119-57',{ timeout: 200000 }).type(name);
          // cy.contains('Card Number').type(cardNumber);
          // cy.contains('Add a credit or debit card').click();
  
          // cy.get('#mat-input-22').should('exist');
  
          // // Получим все опции из выпадающего списка
          // cy.get('#mat-input-22').find('option').then((options) => {
          //   // Выберем случайный индекс из списка опций
          //   const randomIndex = Math.floor(Math.random() * options.length);
          
          //   // Выберем год в выпадающем списке с принудительным нажатием
          //   cy.get('#mat-input-22').find('option').eq(randomIndex).click({ force: true });
          // });
          
  
          // cy.get('#mat-input-23').should('exist');
  
          // // Получим все опции из выпадающего списка
          // cy.get('#mat-input-23').find('option').then((options) => {
          //   // Выберем случайный индекс из списка опций
          //   const randomIndex = Math.floor(Math.random() * options.length);
          
          //   // Выберем год в выпадающем списке с принудительным нажатием
          //   cy.get('#mat-input-23').find('option').eq(randomIndex).click({ force: true });
          // });
          
          // cy.contains('Submit').click();
  
          cy.visit('https://juice-shop-sanitarskyi.herokuapp.com/#/payment/shop');
          cy.get('#mat-radio-41-input'). click();
          cy.contains('Continue').click();
          cy.get('#checkoutButton'). click();
  
          cy.contains('Thank you for your purchase!').should('be.visible');
        });
      });
      
  
  
  
      // cy.get('#navbarAccount').click();
      // cy.get('#navbarLogoutButton').click();
  
    
  
  
  
  