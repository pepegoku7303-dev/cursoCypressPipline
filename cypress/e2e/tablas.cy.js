/// <reference types="cypress"/>
import "cypress-file-upload";
describe("Elementos de una tabla", () => {
  it("Seleccionar hijos desde padre", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Seleccionar el elemento padre (btn-group) y acceder a los hijos
    // Ejemplo: seleccionar el hijo con clase btn-success
    cy.get('.btn-group').children('.btn-success').should('contain', 'Right').click();

    // Luego, seleccionar otro hijo, por ejemplo btn-danger
    cy.get('.btn-group').children('.btn-danger').should('contain', 'Left').click();
  });

  it("Seleccionar elementos con filter", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Usar filter para seleccionar el botón con clase btn-warning (Orange)
    cy.get('.btn').filter('.btn-warning').should('contain', 'Middle').click();

    // Otro ejemplo con btn-success (verde)
    cy.get('.btn').filter('.btn-success').should('contain', 'Right').click();
  });

  it("Seleccionar elementos con find", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Usar find para buscar descendientes dentro del btn-group
    cy.get('.btn-group').find('.btn-danger').should('contain', 'Left').click();

    // Otro ejemplo, buscar por texto o atributo
    cy.get('.btn-group').find('.btn-warning').should('contain', 'Middle').click();
  });

  it("Seleccionar primer y último elemento", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Seleccionar el primer botón dentro del primer btn-group
    cy.get('.btn-group').first().find('button').first().should('contain', 'Left').click();

    // Seleccionar el último botón dentro del primer btn-group
    cy.get('.btn-group').first().find('button').last().should('contain', 'Right').click();
  });

  it("Seleccionar elementos siguientes con nextAll", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Seleccionar el primer botón y usar nextAll para obtener los siguientes
    cy.get('.btn-group').first().find('button').first().nextAll().should('have.length', 2);

    // Validar que contienen 'Middle' y 'Right'
    cy.get('.btn-group').first().find('button').first().nextAll().should('contain', 'Middle').and('contain', 'Right');
  });

  it("Seleccionar elemento padre con parent", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    // Seleccionar un botón y usar parent() para ir al elemento padre
    cy.get('.btn-group').first().find('button').first().parent().should('have.class', 'btn-group');
  });

  it("Dar clic en todos los checkboxes", () => {
    cy.visit("https://demoqa.com/webtables");
    cy.wait(1000);

    // Dar clic en todos los checkboxes de la tabla
    cy.get('[type="checkbox"]').check();
  });

  it.only("Resolver reto con ciclo for", () => {
    cy.visit("https://getbootstrap.com/docs/5.0/components/button-group/");
    cy.wait(1000);

    for (let x = 1; x <= 3; x++) {
      let nombreBoton = '';
      if (x === 1) {
        nombreBoton = 'Left';
      } else if (x === 2) {
        nombreBoton = 'Middle';
      } else if (x === 3) {
        nombreBoton = 'Right';
      }

      cy.get('.btn-group').first().find('button').eq(x - 1).should('contain', nombreBoton).click();
    }
  });

});
