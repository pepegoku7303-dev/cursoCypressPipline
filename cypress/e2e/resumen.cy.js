/// <reference types="cypress"/>
import "cypress-file-upload";

describe("Resumen Práctico de Cypress", () => {

  // =========================================
  // 1. VISITAR PÁGINA, VALIDAR TÍTULO Y URL
  // =========================================
  it("Visitar página y validar título y URL", () => {
    cy.visit("https://automationexercise.com/");
    cy.title().should("eq", "Automation Exercise"); // Assert título
    cy.url().should("include", "automationexercise"); // Assert URL
  });

  // =========================================
  // 2. SELECTORES + CLICK + ASSERT CONTAINS
  // =========================================
  it("Click en botón Products y validar texto", () => {
    cy.visit("https://automationexercise.com/");
    
    cy.get('.shop-menu > .nav')
      .contains("Products")
      .should("be.visible") // Assert visibilidad
      .click();

    cy.get('.title').should("contain.text", "All Products"); // Assert texto de sección
  });

  // =========================================
  // 3. ASSERT FIND + EQ + THEN + CONDICIONAL
  // =========================================
  it("Seleccionar producto, verificar precio y categoría", () => {
    cy.visit("https://automationexercise.com/products");

    // Seleccionar tercer producto (base 0) y hacer clic en "View Product"
    cy.get('.features_items').find('.col-sm-4')
      .eq(2)
      .find('a[href*="product_details"]')
      .should("be.visible")
      .click();

    // Assert categoría "Women"
    cy.get('.product-information')
      .contains("Women")
      .should("be.visible")
      .then((e) => {
        let categoria = e.text();
        cy.log("Categoría:", categoria);
        expect(categoria).to.eq("Women"); // Assert explícito
      });

    // Assert precio y validación condicional
    cy.get(':nth-child(5) > span')
      .then((e) => {
        let precio = e.text().replace('Rs. ','').trim();
        precio = Number(precio);
        cy.log("Precio:", precio);

        if(precio > 1000) {
          cy.log("No entra en presupuesto");
          expect(precio).to.be.gt(1000);
        } else {
          cy.log("Entra en presupuesto");
          expect(precio).to.be.lte(1000);
        }
      });
  });

  // =========================================
  // 4. INPUTS + ASSERTS
  // =========================================
  it("Escribir en inputs y validar valor", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get('#userName')
      .should("be.visible")
      .type("Diego")
      .should("have.value", "Diego");

    cy.get('#userEmail')
      .type("diego@gmail.com")
      .should("have.value", "diego@gmail.com");
  });

  // =========================================
  // 5. CHECKBOX + RADIO BUTTON + ASSERT
  // =========================================
  it("Checkbox y Radio button", () => {
    cy.visit("https://demoqa.com/checkbox");

    cy.get('input[type="checkbox"]')
      .first()
      .check({force:true})
      .should("be.checked"); // Assert que está marcado
  });

  // =========================================
  // 6. UPLOAD DE ARCHIVOS
  // =========================================
  it("Upload de archivo y assert", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    const archivo = 'img.jpg'; // Debe estar en cypress/fixtures
    cy.get('input[type="file"]')
      .attachFile(archivo)
      .then(($input) => {
        expect($input[0].files[0].name).to.eq('img.jpg'); // Assert archivo cargado
      });
  });

  // =========================================
  // 7. ALERTAS, CONFIRM Y PROMPT
  // =========================================
  it("Alertas y confirm", () => {
    cy.visit("https://demoqa.com/alerts");

    // ALERT
    cy.on('window:alert', (text) => {
      expect(text).to.eq("You clicked a button");
    });
    cy.get('#alertButton').click();

    // CONFIRM
    cy.on('window:confirm', (text) => {
      expect(text).to.eq("Do you confirm action?");
      return true; // Aceptar confirm
    });
    cy.get('#confirmButton').click();

    // PROMPT
    cy.window().then(win => {
      cy.stub(win, 'prompt').returns("Cypress Test");
    });
    cy.get('#promtButton').click();
    cy.window().its('prompt').should('be.called');
  });

  // =========================================
  // 8. REFERENCIA A WINDOW / DOCUMENT
  // =========================================
  it("Window y document", () => {
    cy.visit("https://testsheepnz.github.io/");
    cy.document().should('have.property', 'charset', 'UTF-8'); // Assert charset
  });

  // =========================================
  // 9. ARRAYS Y FUNCIONES + ASSERTS
  // =========================================
  it("Arrays y funciones simples", () => {
    const numeros = [10, 20, 30];
    expect(numeros).to.have.length(3); // Assert length

    numeros.push(40);
    expect(numeros).to.include(40); // Assert valor agregado

    numeros.pop();
    expect(numeros).to.not.include(40); // Assert valor eliminado

    function suma(a, b) {
      return a + b;
    }
    expect(suma(2,3)).to.eq(5); // Assert función
  });

  // =========================================
  // 10. BUCLES Y CONDICIONALES
  // =========================================
  it.only("Condicionales y bucles", () => {
    const numeros = [1,2,3,4,5];

    for(let i=0; i<numeros.length; i++){
      expect(numeros[i]).to.be.a('number'); // Assert tipo
    }

    for(const num of numeros){
      if(num % 2 === 0){
        cy.log(num + " es par");
      } else {
        cy.log(num + " es impar");
      }
    }
  });

});
