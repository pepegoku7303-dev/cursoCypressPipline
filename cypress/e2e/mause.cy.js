/// <reference types="cypress" />
import 'cypress-file-upload';

require('@4tw/cypress-drag-drop')

describe("Drag and Drop", () => {

    beforeEach(() => {
        // Ignorar errores de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            return false;
        });
    });

    it("Droppable", () => {
        cy.visit("https://demoqa.com/droppable");

        // Hacer drag and drop
        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });

        // Validación
        cy.get('#droppable p').should('contain.text', 'Dropped!');
    });
     it("Droppable no aceptado", () => {
        cy.visit("https://demoqa.com/droppable");

        cy.get('#droppableExample-tab-accept').click();

        // Intentar hacer drop con el elemento no aceptado
        cy.get('#notAcceptable').trigger('mousedown', { which: 1 });
        cy.get('#acceptDropContainer #droppable')
        .trigger('mousemove').trigger('mouseup', { force: true });

        // Validación: el texto no debe cambiar
        cy.get('#acceptDropContainer #droppable p')
        .should('contain.text', 'Drop here');  
    });
    it("Mause over", () => {
        cy.visit("https://www.way2automation.com/");
        cy.wait(1000);
        cy.title().should('eq', 'Get Online Selenium Certification Course | Way2Automation');
        cy.wait(1000);
        cy.contains('Resources').trigger('mouseover');
        cy.contains('Blog').invoke('removeAttr', 'target').click({ force: true });
        cy.wait(1000);
    });
it.only("Slider", () => {
    // Visitar la página
    cy.visit("https://demoqa.com/slider");

    // Validar título
    cy.title().should('eq', 'DEMOQA');

    cy.get('#sliderValue').type('0'); // Establecer valor inicial en 0

    // Mover el slider al valor 80
    cy.get('.range-slider')
      .invoke('val', 50)        // Cambiar valor del input
      .trigger('input')          // Disparar evento input
      .trigger('change');        // Disparar evento change para compatibilidad

    // Validar que el input refleje el nuevo valor
    cy.get('#sliderValue').should('have.value', '50');
});




});
