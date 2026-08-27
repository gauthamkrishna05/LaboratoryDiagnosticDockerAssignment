pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Laboratory Diagnostic Platform'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests'
            }
        }

        stage('Quality Check') {
            steps {
                echo 'Checking code quality'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image'
            }
        }

        stage('Staging') {
            steps {
                echo 'Deploying to staging'
            }
        }

        stage('Production') {
            steps {
                echo 'Deploying to production'
            }
        }
    }
}