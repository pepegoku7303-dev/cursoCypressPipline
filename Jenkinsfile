pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/pepegoku7303-dev/cursoCypressPipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/pepegoku7303-dev/cursoCypressPipline.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key 25f3a3c0-01bb-4942-bcfa-95a062a814b4 --parallel'
                    
                    }
                }                  
            }

             
        }

    }
            
}