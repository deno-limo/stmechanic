beforeEach(()=>{
+
  cy.login('jthiru01@gmail.com','12345678')
  
});
it('get user',()=>{
  cy.visit('/')
  cy.get('.css-cu01hj > .MuiAvatar-root').click()
  cy.get('a.MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.wait(5000)
  cy.visit('/settings')

 
})
it('home page',()=>{
cy.visit('/')



})

