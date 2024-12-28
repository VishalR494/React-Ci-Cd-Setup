pipeline {
    agent any 
    stages {
        stage ('Build'){
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true //Reuse the node for the next steps
                }
            }
            steps {
                sh '''
                   ls -l 
                   node --version
                   npm --version
                   npm install
                   npm run build
                   ls -l
                   '''
            }
        }
    }
}