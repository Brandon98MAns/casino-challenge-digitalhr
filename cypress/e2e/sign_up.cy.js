describe('casino challenge', () => {

  //In this section, in order to organize my code, I put the commands that are going to repeat for each test. 
  //By doing this I spend less time repeating code. 
  beforeEach(() => {
    cy.visit('https://demo.casino') //Go to the web site
    cy.get('.mfp-close').click() //Close the pop "welcome" window
    cy.get('[data-test="nav-reg-head"] > span').should('be.visible').click()//Click sign up button, but first validate that the same is visible.
    cy.get('.page__title').should('be.visible')//Validate that the form title is displayed correctly
  })
  //We can put .only for run the selected test. 
  it.only('sign-up by email', () => {
    //Fill out the form
    cy.get('[data-test="input-email"]').type("someone@example.com")//Enter Email
    cy.get('.input__wrapper > label').click()//Mark checkbox with click function. Cant't use check function because it's a label element.
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .selectric__button').click()//Open the dropdown list
    cy.get('[data-index="4"]').click()//Select coin index 4 element: mDOGE   
    cy.get('[data-test="input-password"]').type('P4ssW0rd98+')//Enter password
    cy.get('[data-test="input-password_confirmation"]').type('P4ssW0rd98+')//Confirm password
    cy.get('[data-test="control-submit"] > span').click()//end by creating account
  })

  //same process but using phone signup version
  it('sign-up by phone', () => {
    //Fill out the form
    cy.get('.form__input > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > .last').click()
    cy.get('.active > .form__input > .label-input').contains('Phone number')
    cy.get('[data-test="input-phone"]').type(1132233223)
    cy.get('.input__wrapper > label').click()//Mark checkbox with click function. Cant't use check function because it's a label element.
    cy.get('.input__wrapper > .selectric-wrapper > .selectric > .selectric__button').click()//Open the dropdown list
    cy.get('[data-index="4"]').click()//Select coin index 4 element: mDOGE   
    cy.get('[data-test="input-password"]').type('P4ssW0rd98+')//Enter password
    cy.get('[data-test="input-password_confirmation"]').type('P4ssW0rd98+')//Confirm password
    cy.get('[data-test="control-submit"] > span').click()//end by creating account
  })
})