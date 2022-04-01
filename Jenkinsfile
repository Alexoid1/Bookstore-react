pipeline {

    agent any

    stages {

        stage("build") {

            steps {
                sh '''#!/bin/bash
                    file=.env
                    npm i

                    touch $file

                    echo "SKIP_PREFLIGHT_CHECK=true" >> $file

                    cd ./e2e
                                    
                    npm i
                                    
                    cd ./..
                '''
            }
        }

        stage("test") {

            steps {
                sh '''#!/bin/bash
                    npm test a
               
                    cd ./e2e 
               
                    npm run cy:open
                '''
            }

        }

        stage("deploy") {

            steps {
                echo "application deployed sucefully"
            }
        }
    }
}

