#!/usr/bin/env groovy


pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Build') {
            steps {
                echo 'building'
                sh 'npm install'
               sh 'npm run build'
                echo 'build done'
                sh 'npm run start &'
            }
           
        }

    }
}
