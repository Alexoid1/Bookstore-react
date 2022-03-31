pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                ./init.sh

            }
        }

        stage("test") {

            steps {
               sh "npm test
               
               cd ./e2e 
               
               npm run cy:open"
            }
        }

        stage("deploy") {

            steps {
                echo "application deployed sucefully"
            }
        }
    }
}

