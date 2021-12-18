describe ('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get('input[name=name]')
    const button = () => cy.get('button[id="order-button"]');
    const olives = () => cy.get('input[name=name]');
   
    
    

    it('checking to make sure test work', () => {
        expect(1+1).to.equal(2);
        expect(2+2).not.to.equal(32);
    })
    
    it('the proper elements are showing', () => {
        nameInput().should('exist');
        button().should('exist');
        olives().should('exist');
    })

    it('filling out inputs', () => {
        nameInput().should('have.value', '').type('Hunter Thom').should('have.value', 'Hunter Thom');
    })

    it('submit button start out disabled', () => {
        button().should('be.disabled')
    })
    
    it('olives checked', () => {
        olives().click()
    })
    

})