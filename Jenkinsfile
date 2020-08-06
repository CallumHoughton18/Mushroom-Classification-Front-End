def summary

pipeline {
  agent none
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }  
  stages {
    stage('build and test') {
      agent { docker { image 'node:14.7.0-alpine' } }
      stages {
        stage('building - install packages') {
          steps {
            sh 'yarn'
          }
        }
        stage('test') {
          steps {
            // sh 'yarn jest --coverage --coverageDirectory='coverage''
            sh 'yarn jest'
            sh 'yarn lint'
          }   
        }
      }
      post {
        cleanup {
          deleteDir()
        }
      }
    }

    stage('push') {
      agent{ label 'master' }
      when {
        branch 'master'
      }
      steps {
        echo 'Building and Pushing API Image to DockerHub'
        script {
          withCredentials([string(credentialsId: 'dockerhub-repo', variable: 'REPO')]) {
            def apiImage = docker.build("${REPO}", "./src")
            docker.withRegistry('https://registry.hub.docker.com', 'DockerHub') {
              apiImage.push("${env.BUILD_NUMBER}")
              apiImage.push("latest")
            }

            sh "docker rmi ${apiImage.id} -f"
            // build job: 'Mushroom_Application_Deployment/Mushroom_Classification_Application_Deployment', wait: false
          }
        }
      }
    }
  }

//   post {
//     always {
//       node('master') {
//         withCredentials([string(credentialsId: 'sendto-email', variable: 'EMAIL')]) {
//           emailext( to: "${EMAIL}", 
//                     body: "*Test Summary* - ${summary.totalCount}, Failures: ${summary.failCount}, Skipped: ${summary.skipCount}, Passed: ${summary.passCount}\n${env.BUILD_URL}", 
//                     subject: "[${currentBuild.currentResult}] ${env.JOB_NAME} - Build # ${env.BUILD_NUMBER}",
//                     attachLog: true)
//         }
//         deleteDir()
//       }
//     }
//   }
}