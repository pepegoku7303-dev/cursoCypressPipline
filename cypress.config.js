const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "du36qt",

  e2e: {
    setupNodeEvents(on, config) {
      // Implementar listeners de eventos aquí si es necesario
    },
    // Definimos dónde buscar los archivos de prueba
    specPattern: "cypress/e2e/**/*.cy.js",

    // Configuraciones de tiempo de espera que tenías originalmente
    pageLoadTimeout: 60000,
    defaultCommandTimeout: 15000,

    // Optimización para Pipelines (Jenkins)
    video: false,
    screenshotOnRunFailure: true,
  },
});