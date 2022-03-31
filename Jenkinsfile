pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                sh"file=.env

                npm i

                touch $file

                echo 'SKIP_PREFLIGHT_CHECK=true' >> $file
                
                cd ./e2e
                
                npm i
                
                cd ./.."

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

            }
        }
    }
}

