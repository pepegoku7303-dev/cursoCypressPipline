pipeline {
    agent none // No usamos un agente global porque definimos agentes específicos en cada stage

    tools {
        nodejs "node20" // Debe coincidir exactamente con el nombre en 'Global Tool Configuration'
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2" // Pon aquí la etiqueta que configuraste en tu nodo
                    }
                    steps {
                        // El checkout se hace automáticamente si usas Pipeline desde SCM, 
                        // pero lo dejamos por seguridad si lo necesitas.
                        git url: 'https://github.com/pepegoku7303-dev/cursoCypressPipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2" // Si solo tienes un PC, usa la misma etiqueta
                    }
                    steps {
                        git url: 'https://github.com/pepegoku7303-dev/cursoCypressPipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    }
                }                  
            }
        }
    }
}