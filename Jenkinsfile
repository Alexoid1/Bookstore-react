pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                sh"npm install"

                sh"touch .env"

                echo "SKIP_PREFLIGHT_CHECK=true" >> $file

                sh"cd ./e2e"
                                
                sh"npm install"
                
                sh"cd ./.."

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

