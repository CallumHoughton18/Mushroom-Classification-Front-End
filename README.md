# Mushroom Classification Front-End
[![Build Status](https://devops.callums-stuff.net/api/badges/CallumHoughton18/Mushroom-Classification-Front-End/status.svg)](https://devops.callums-stuff.net/CallumHoughton18/Mushroom-Classification-Front-End) ![GitHub](https://img.shields.io/github/license/CallumHoughton18/Mushroom-Classification-Front-End)

The front-end for interacting with the [Mushroom Classification Model API](https://github.com/CallumHoughton18/Mushroom-Classification), built using TypeScript and ReactJS.

## Demo and Availability

A demo of the application is available at [mushrooml.callums-stuff.net](https://mushrooml.callums-stuff.net).

The application is also available as a [public docker image](https://hub.docker.com/repository/docker/callumhoughton22/mushroom-classification-front-end).

## Setup and Commands

The project uses the `dotenv` npm package to manage environment variables. So, in the project root a `.env` file needs to be created and a `API_BASE_URL` environment needs to be specified, either pointing to a version of the backend API running locally or the live site. For example:

`API_BASE_URL=https://mushroomlapi.callums-stuff.net`

Besides this the application doesn't require any special setup and can be ran using the usual npm/yarn commands, I use yarn as my dependency management tool so all the instructional commands will be given in that form, but the npm equivalent can easily be found.

### Installing Node Packages

Run `yarn install` in the root of the project.

### Running for Development

run `yarn dev`. This starts the app using Webpack's Development Web Server, the commands flags can be seen in `package.json`.

### Building for Production

run `yarn build`. This builds the app for production, outputting the build files into the `/build` directory. 

### Testing

The application uses Jest as the testing framework. The Jest test runner can be started using `yarn test`or `yarn test:watch` the latter runs Jest in watch mode. If you are not familiar with Jest it is recommended to read over their [documentation](https://jestjs.io/) to clarify the testing structure within the application.

### Source Map Explorer

Run `yarn analyze` **AFTER**  the project is built. This is useful to see the size proportions of the builds bundle s and where the 'bulk' of the application size resides.

### Linting

The project uses ESLint as a linter, run `yarn lint` to use.

## Project Structure

All source code is contained within the `src` folder. Design documents are placed in the `design` folder.

### Source Code (`/src` Directory)

#### `/stylesheets`

All of the SCSS files for the project is placed in here, following the conventional directory structure for SCSS files.

#### `/assets`

All static content for the project, such as fonts, files, and images.

#### `/shared`

All components and code files in here should be project agnostic, and completely reusable. They should be able to be dropped in, along with any stylesheets, to another project without much hassle.

#### `/library_helpers`

All helper methods and functions for libraries used in the project. These should also be project agnostic and fully reusable.

#### `/test_helpers`

All helper methods and functions in relation to tests throughout the project. Not intended to be reusable.

#### `/utils`

Used as a 'misc' like folder for any utility functions, methods, or constants related to the project. Not intended to be reusable.

#### `/navigation`

Contains code intended to abstract the navigation system for the application via the use of hooks and interface implementations. This is specific to the navigation structure of the project and so is not intended to be reusable.

#### Tests

Tests files are created as close to the implementation as possible, under directories called `__tests__`. Test files with `.int` in the test file name contain integration tests, with minimum mocking to test how hooks work within the relevant components.

### Linting

The project makes use of both ESLint as a linter and Prettier as an automatic code formatter, which should be configurable with your editor/IDE. The configuration files for each can be found in the root of the project.

### Module Bundler and 'Compilation' Toolchain

The project uses Webpack, with TypeScript plugins, along with the TypeScript transpiler. The configuration for both TypeScript and Webpack can be seen in the project root.

## Docker Containers

The project is containerised via Docker using the root `Dockerfile`. To view an example of how it can be deployed check the [Mushroom Classification Deployment Repository](https://github.com/CallumHoughton18/Mushroom-Classification-Deployment).

## CD/CI

~~The project is configured for a CD/CI Pipeline via Jenkins 2.0, the 'pipeline as code' is available in the root `jenkinsfile`. 
**The Jenkins server must have the initial recommended plugins when installing Jenkins, as well as the Warnings Next Generation plugin and the Cobertura plugin. You must also configure the extended email notification plugin**.~~

~~In the spirit of open source the Jenkins CI and CD jobs can be viewed [here](http://jenkins.mushroomai.site/).~~

~~Credentials also need to be configured for the pipeline. Which credentials, and of what type, can be easily seen via the `withCredentials` blocks in the Jenkinsfile or via the viewable jobs for the demos.~~

As of May 2021 the projects CI and CD pipeline is configured via a self hosted drone.io instance. [The pipeline is publically visible.](https://devops.callums-stuff.net/CallumHoughton18/Mushroom-Classification-Front-End) The jenkinsfile has been kept in the repository as it could be useful.

## Liability

This project is purely to demonstrate how a machine learning model can be generated and then interacted with via a web API, **the project is not to be used in your decision on whether to consume a mushroom or not**. Any project authors/contributors are not responsible for any harm you inflict on yourself if you refuse to follow this rule.