pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build') {
            steps {
                echo 'Building..'
            }
            steps {
                sh 'npm install'
               sh 'npm run build'
               
            }
            steps {
               sh 'npm run start'   
            }
        }

    }
}
