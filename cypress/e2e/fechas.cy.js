/// <reference types="cypress"/>
describe("Fechas", () => {

  // Ignorar errores de scripts externos
  Cypress.on('uncaught:exception', (err, runnable) => {
    console.warn('Se ignoró un error de script externo:', err.message);
    return false;
  });

  it("Calendario simple y con hora", () => {

    cy.visit("https://demoqa.com/date-picker");
    cy.title().should('eq', 'DEMOQA');

    // --- Calendario simple ---
    cy.get('#datePickerMonthYearInput').click();
    cy.get('.react-datepicker__year-select').select('1990');
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__day--015').click();
    cy.get('#datePickerMonthYearInput').should('have.value', '04/15/1990');

  });

});
