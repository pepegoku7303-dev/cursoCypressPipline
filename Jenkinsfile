pipeline {
    agent none 

    tools {
        nodejs "node20" 
    }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2" }
                    steps {
                        // Jenkins ya descargó el código aquí automáticamente
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent { label "Agent2" }
                    steps {
                        // Jenkins ya descargó el código aquí automáticamente
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    }
                }                  
            }
        }
    }
}