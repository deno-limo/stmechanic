///<reference types='cypress'/>

  beforeEach(()=>{

    cy.login('jthiru01@gmail.com','12345678')
    
  });
  it('login 2',()=>{
    cy.visit('/')

    cy.get('.css-1wxaqej > .MuiTypography-root').should('have.text','Good Evening!')
  
    
    

})
it('login 3',()=>{
  cy.visit('/')
  cy.get('.css-cu01hj > .MuiAvatar-root').click()

})

