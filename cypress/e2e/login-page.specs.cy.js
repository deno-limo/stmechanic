///<reference types='cypress'/>

  describe('login',()=>{
    it('successfully loads',()=>{
     
      cy.visit('/')
      cy.wait(2000)
      
     //  cy.get('.MuiTypography-h2').should('have.text','Hi buddy, welcome Back!')
      

    })
 
    it('invalid email valid password spec',()=>{
      cy.visit('/')
      cy.get('#email')
        .type('fake@gmail.com')
        .should('have.value','fake@gmail.com')
        .and('be.visible')


      cy.get('#password')
        .type('12345678')
        .should('have.value','12345678')
        .and('be.visible')

      cy.get('[data-testid="VisibilityOffIcon"] > path')
        .click()


      cy.contains('SIGN IN')
        .should('be.visible')
        .click()
   // cy.wait(5000)
      cy.get('.Toastify__toast-body')
        .should('have.text','Invalid credentials')
        .and('be.visible')

    })


    it('valid email invalid password spec',()=>{

      cy.visit('/')
      
      cy.get('#email')
        .type('jthiru01@gmail.com')
        .should('have.value','jthiru01@gmail.com')
        .and('be.visible')
        
      cy.get('#password')
        .type('sdfbje')
        .should('be.visible')
        .and('be.visible')
        
      
      cy.get('[data-testid="VisibilityOffIcon"] > path')
        .click()

        cy.contains('SIGN IN')
        .should('be.visible')
        .click()

   //   cy.wait(5000)

      cy.get('.Toastify__toast-body')
        .should('have.text','Invalid credentials')
        .and('be.visible')
    

    })
    it('successfull login spec',()=>{
      cy.visit('/')

      cy.get('#email')
        .type('jthiru01@gmail.com')
        .should('have.value','jthiru01@gmail.com')
        .and('be.visible')
        
      
      cy.get('#password')
        .type('12345678')
        .should('have.value','12345678')
        .and('be.visible')
       


      cy.get('[data-testid="VisibilityOffIcon"] > path')
        .should('be.visible')
        .click()

      cy.contains('SIGN IN')
        .should('be.visible')
        .click()

     // cy.wait(5000)

      //The pop up message after successful login is not prompted 
         
    
      
    })
    it('remember me functionality',()=>{
      cy.visit('/')

      cy.get('.PrivateSwitchBase-input')
        .click()
        .should('be.checked')
       

    })
    it('reset password successfully',()=>{
      cy.visit('/')

      cy.get('a')
        .click()

    })
  })

