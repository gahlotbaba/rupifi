#!/usr/bin/env groovy

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
                echo 'building'
                sh 'npm install'
               sh 'npm run build'
                sh 'npm run start' 
               
            }
           
        }

    }
}
