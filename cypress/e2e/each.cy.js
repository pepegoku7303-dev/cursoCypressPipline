/// <reference types="cypress"/>

describe("Bucles for y Each", () => {
  it("For uno", () => {

    for (let i = 0; i <= 10; i++) {
      cy.log("Valor de i: " + i);
    }   
  });
  
  it("For dos", () => {

    for (let i = 10; i >= 0; i--) {
        let t =  5 ;
        cy.log(t+"x"+i+"="+(t*i));
    } 
  })

  it("For tres", () => {
    cy.visit("https://automationexercise.com/products");

    // Encontrar el producto "Stylish Dress" y darle click al primer enlace (Add to cart)
    cy.contains('Stylish Dress').parents('.product-image-wrapper').find('a').first().click();
  });

  it.only("For cuatro", () => {
    cy.visit("https://automationexercise.com/products");

    //Recorre todos los productos y muestra su nombre en consola
    cy.get('.product-image-wrapper').each(($el, index, $list) => {
      const nombreProducto = $el.find('.productinfo p').text();
      cy.log('Producto ' + (index + 1) + ': ' + nombreProducto);
    });
    // Guardar en una valiable tosodos los productos
    cy.get('.product-image-wrapper').then($productos => {
      const totalProductos = $productos.length;
      cy.log('Total de productos: ' + totalProductos);
    });
    // Guardar en una valiable tosodos los productos con el bucle foreach
    let contador = 0;
    cy.get('.product-image-wrapper').each(($el, index, $list) => {
        contador++;
    }).then(() => {
        cy.log('Total de productos (contado con each): ' + contador);
    });
    
  });
});