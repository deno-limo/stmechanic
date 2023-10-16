beforeEach(()=>{
+
  cy.login('jthiru01@gmail.com','12345678')
  
});
it('get user',()=>{
  cy.visit('/home')
cy.get('.MuiButtonBase-root MuiBottomNavigationAction-root css-1aag7dl')
 
})
it('home page',()=>{
cy.visit('/')
cy.get('#nameofuser').should('have.text','Welcome test1')


})

