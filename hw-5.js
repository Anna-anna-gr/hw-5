describe('Assertions', () => {
  const searchTerms = [
    {
    testData: {
      position: 'top-right',
      title: 'HI there!',
      content: 'I am cool toaster!',
      time: '2000',
      type: 'success'
    },
    expectedResult: {
      icon: 'checkmark',
      title: 'HI there!',
      content: 'I am cool toaster!',
      color: 'rgb(96, 175, 32)',
      position: 'top-right'
    }
  },
  {
    testData: {
      position: 'top-left',
      title: 'I am here!',
      content: 'Sunny weather',
      time: '2000',
      type: 'warning'
      },
    expectedResult: {
      icon: 'alert-triangle',
      title: 'I am here!',
      content: 'Sunny weather',
      color: 'rgb(255, 159, 5)',
      position: 'top-left'
    }
  },
  {
    testData: {
      position: 'bottom-right',
      title: 'Victory Day',
      content: 'Smile',
      time: '2000',
      type: 'info'
      },
    expectedResult: {
      icon: 'question-mark',
      title: 'Victory Da',
      content: 'Smile',
      color: 'rgb(4, 149, 238)',
      position: 'bottom-right'
    }
  },
  {
    testData: {
      position: 'bottom-left',
      title: 'Yahoo',
      content: 'Hey you',
      time: '2000',
      type: 'danger'
      },
    expectedResult: {
      icon: 'flash',
      title: 'Yahoo',
      content: 'Hey you',
      color: 'rgb(176, 0, 32)',
      position: 'bottom-left'
    }
  }
  ];

beforeEach ( () => {
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/', {timeout: 100000});
  cy.get('[alt="Material Light Theme"]').click();
  cy.get('.menu-title.ng-tns-c141-19').click();
  cy.get('.menu-title.ng-tns-c141-23').click({ timeout: 100000 });
})

searchTerms.forEach((searchTerm, index) => {
  it(`should display notification ${index + 1}`, () => {
   
        cy.get('[name="title"]', { timeout: 200000 }).type(searchTerm.testData.title);
        cy.get('[name="content"]',  { timeout: 200000 }).type(searchTerm.testData.content);

     
        cy.get('.mat-ripple.position-select', {timeout:100000}).click();
        cy.get('.mat-ripple.position-select', {timeout:100000}).contains(searchTerm.testData.position).click();
     
     
        cy.contains('label', 'Toast type:').parent().find('[icon="chevron-down-outline"]', {timeout:100000}).click();
        cy.contains(searchTerm.testData.type, { timeout: 10000 }).click();
        

      
        cy.get('nb-card-footer .status-basic', {timeout:100000}).click()
        cy.get('nb-toast[ng-reflect-toast]').then(toast=>{      

      
        cy.get('.icon-container [data-name="${searchTerm.expectedResult.icon}"]', { timeout: 100000})
        .should('exist')
        .and('have.attr', 'data-name', searchTerm.expectedResult.icon);
      
        cy.get('[class="title subtitle"]', {timeout:100000}).should('have.text', searchTerm.expectedResult.title);
        cy.get('[class="message"]', {timeout:100000}).should('have.text', searchTerm.expectedResult.content);
        cy.get('[class="message"]', {timeout:100000}).should('have.css', 'background-color', searchTerm.expectedResult.content);

        cy.get(getPositionSelector(searchTerm.expectedResult.position)).should('have.text', searchTerm.expectedResult.position);

// Функция для получения динамического селектора в зависимости от позиции
function getPositionSelector(position) {
  switch (position) {
    case 'top-right':
      return '#cdk-overlay-1';
    case 'top-left':
      return '#cdk-overlay-3';
    case 'bottom-right':
      return 'cdk-overlay-5';
    case 'bottom-left':
      return '#cdk-overlay-4';
    default:
      return ''; // Здесь возвращайте пустую строку или другой дефолтный селектор, если нужно
  }
}
})
})
})
})