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
               npm run build
            }
          steps {
                npm run start
            }
        }

    }
}
