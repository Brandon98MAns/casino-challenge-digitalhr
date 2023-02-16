describe('casino challenge', () => {

    //In this section, in order to organize my code, I put the commands that are going to repeat for each test. 
    //By doing this I spend less time repeating code. 
    beforeEach(() => {
      cy.visit('https://demo.casino') //Go to the web site
      cy.get('.mfp-close').click() //Close the pop "welcome" window
    })
    
    //name of the test
    it('validate dark mode label', () => {
        //validate the icon moon is visible by default.
      cy.get('.header--left > .theme-switch__wrapper > #switch > .switcher > .icon-moon').should('be.visible')
        //Validate dark mode label is visible and action it.
        cy.get('.header--left > .theme-switch__wrapper > #switch > .switcher').should('be.visible').click()
        //validate the sun icon is visible after action it.
      cy.get('.header--left > .theme-switch__wrapper > #switch > .switcher > .icon-sun').should('be.visible')
        //validate the icon moon is hidden after action it.
      cy.get('.header--left > .theme-switch__wrapper > #switch > .switcher > .icon-moon').should('be.hidden')
      
      cy.get('.header--left').should("not.have.css", "background-color", "#707585")
        
      
  
    })
  })