import url from '../fixtures/apiPaths.json';
import dataJoin from '../../data.json'  //the file in .gitignore

// the name of test suit
describe('Amazon UI Testing', () => {
  let urlAmazon;
  let emailSigned = dataJoin.email  
  let passwordSigned = dataJoin.password

  //Enter YourEmail and Password First
  beforeEach(() => {
    urlAmazon = `${url.amazonUrl}`;
    cy.visit(urlAmazon);
    cy.get("div[id='nav-link-accountList'] a:nth-child(1)").click();
    cy.get('#ap_email_login').type(emailSigned);
    cy.get('.a-button-input').click();

    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false;
    });

    cy.get('#ap_password').type(passwordSigned);
    cy.get('#signInSubmit').click();
  });

  // test case
  it('tesing amazon products', () => {
    cy.get('.hm-icon').click();
    cy.get('.hmenu-compressed-btn').click();

    cy.get(
      '.hmenu-visible > [aria-labelledby="Shop by Category"] > :nth-child(2) > .hidden > :nth-child(11) > .hmenu-item',
    ).click();

    cy.get(
      ':nth-child(32) > .category-section > ul > :nth-child(1) > .hmenu-item',
    ).click();

    cy.get(
      ':nth-child(2) > .a-unordered-list > .a-spacing-micro > .a-list-item > .a-link-normal > .a-checkbox > label > .a-icon',
    ).click();

    cy.xpath("//a[.//span[normalize-space()='New']]").click();
    cy.get('#a-autoid-0-announce').click();
    cy.get('#s-result-sort-select_2').click();
    cy.visit(
      'https://www.amazon.eg/s?i=videogames&rh=n%3A18022560031%2Cp_n_free_shipping_eligible%3A21909080031%2Cp_36%3A-1500000&s=price-desc-rank&dc=&language=en&qid=1744418327&rnid=21909190031&ref=sr_nr_p_36_0_0',
    );

    //For Loop or Use DataForEach
    for (let i = 1; i <= 3; i++) {
      cy.get(`#a-autoid-${i}-announce`).click();
      cy.wait(1000);
    }
    for (let i = 5; i <= 6; i++) {
      cy.get(`#a-autoid-${i}-announce`).click();
      cy.wait(1000);
    }
    for (let i = 8; i <= 13; i++) {
      cy.get(`#a-autoid-${i}-announce`).click();
      cy.wait(1000);
    }

    cy.get('#nav-cart-count').click();
    cy.get('#sc-subtotal-label-activecart');
    cy.contains('#sc-subtotal-label-activecart', 'items').should('exist');
  });

});
