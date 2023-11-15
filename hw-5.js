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
        position: 'top-right',
        style: 'justify-content: flex-end; align-items: flex-start;'
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
        position: 'top-left',
        style: 'justify-content: flex-start; align-items: flex-start;'
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
        position: 'bottom-right',
        style: 'justify-content: flex-end; align-items: flex-end;'
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
        position: 'bottom-left',
        style: 'justify-content: flex-start; align-items: flex-end;'
      }
    }
  ];

  beforeEach(() => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/', { timeout: 100000 });
    cy.get('[alt="Material Light Theme"]').click();
    cy.get('.menu-title.ng-tns-c141-19').click();
    cy.get('.menu-title.ng-tns-c141-23').click({ timeout: 100000 });
  })

  searchTerms.forEach((searchTerm, index) => {
    it(`should display notification ${index + 1}`, () => {

      cy.get('[name="title"]', { timeout: 200000 }).clear().type(searchTerm.testData.title);
      cy.get('[name="content"]', { timeout: 200000 }).clear().type(searchTerm.testData.content);


      cy.get('.mat-ripple.position-select', { timeout: 100000 }).click();
      cy.contains(searchTerm.testData.position, { timeout: 10000 }).click();
      // get('.mat-ripple.position-select', { timeout: 100000 }).

      cy.contains('label', 'Toast type:').parent().find('[icon="chevron-down-outline"]', { timeout: 100000 }).click();
      cy.contains(searchTerm.testData.type, { timeout: 10000 }).click();

      cy.contains('button', 'Show toast', { timeout: 200000 }).click()
      cy.get('nb-toast[ng-reflect-toast]').then(toast => {


        cy.wrap(toast).find(`.icon-container [data-name="${searchTerm.expectedResult.icon}"]`, { timeout: 100000 })
          .should('exist')
          .and('have.attr', 'data-name', searchTerm.expectedResult.icon);

        cy.wrap(toast).find('[class="title subtitle"]', { timeout: 100000 }).should('contain', searchTerm.expectedResult.title);
        cy.wrap(toast).find('[class="message"]', { timeout: 100000 }).should('have.text', searchTerm.expectedResult.content);
        cy.wrap(toast).should('have.css', 'background-color', searchTerm.expectedResult.color);

        cy.wrap(toast).parents('.cdk-global-overlay-wrapper').should('have.attr', 'style', searchTerm.expectedResult.style);

      }
      )
    })
  })
})





