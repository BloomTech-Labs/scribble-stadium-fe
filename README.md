# Scribble Stadium Frontend

[![Maintainability](https://api.codeclimate.com/v1/badges/0a3a11c6f1e83568a5cf/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/Labs26-StorySquad-FE-TeamB/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0a3a11c6f1e83568a5cf/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/Labs26-StorySquad-FE-TeamB/test_coverage)

[<img src="https://avatars2.githubusercontent.com/t/4044276?s=280&v=4" width="200" />](https://avatars2.githubusercontent.com/t/4044276?s=280&v=4)

Scribble Stadium turns “reluctant readers” into authors and illustrators through a collaborative world-building game.

## Current State Of The App

<!-- Todo! Update this -->

Work done by Labs32: [Click Here](https://docs.google.com/document/d/1aSt8nd0Mg_2lcXzV9of9Bkd4DsLA-KMbRKVbyIDBnEc/edit)
<br/>
Work done by Labs29: [Click Here](https://docs.google.com/spreadsheets/d/1ZdhfQEAsz3IhgVa8zMZ0JkuD6-oasDI4hplPFXZaXNQ/edit?usp=sharing)

## Project Overview

[How the App should work - A primer for devs](storysquadExplained.md)
<br/>
[Labs31 Product Roadmap](https://www.notion.so/Roadmap-Story-Squad-Labs-31-6f774da319e34c238764765a864632a6)
<br/>
[Labs27 Frontend video](https://youtu.be/RwdSUOyeXG0)
<br>
[Labs28 Progress/Starting point video](https://www.youtube.com/watch?v=fo_eAq-__RE)
<br>
[Labs27 Backend video](https://youtu.be/K5k19qWKHbI)
<br>
[Labs26 Product Roadmap](https://www.notion.so/Story-Squad-Roadmap-2682f21ae48b420cbb0caafa3f500b5e)
<br>
[UX Design](https://www.figma.com/file/WaHXdLK2NASoFWYVMZLVNt/Story_Squad?node-id=962%3A211)
<br><!-- Todo! Update this -->
[Architecture Layout](https://whimsical.com/428nXLpzshbbb32xF67Lu4)
<br>

---

Welcome to Scribble Stadium! We are an interactive learning platform designed for grade school children, and we help build reading comprehension as well as artistic, writing, and analytical/critical thinking skills through weekly competitions.

Each week features a new chapter in an exciting novel, written and serialized specifically for Scribble Stadium by author and educator Graig Peterson. Children are provided with prompts based on the chapter they've just read, and participants are then divided into teams of two. Students create art and fanfiction to match the prompt, before going head to head in a bracket-style tournament.

In addition to growing their literary and artistic skills, students learn team building and critical thinking skills through a unique voting system, where each child must weight their own work against their teammate in order to increase their odds of winning. Badges and points incentivize winning and encourage participation.

Scribble Stadium is a paid service; parents are required to create the account for their children and pay a monthly subscription fee in order for their children to compete. This brings the platform into compliance with COPPA and ensures a long future for the project.

## Contributors

[View contributors](./DOCUMENTATION/contributors.md)

### Key Features

<!-- Todo! Update this -->

- A custom, serialized novel geared toward children in 3rd-6th grade
- Parental controls which allow parents to add and customize child accounts
  <!-- - Detailed breakdown of desired app functionality -->
  <br>

## Tech Stack

### [Frontend](https://github.com/Lambda-School-Labs/scribble-stadium-fe) built using:

<!-- Todo! Update this???? -->

React

- First class performance with virtual DOM
- Lightweight library resulting in low bundle size/improved load times
- Easy cross-platform development via progressive web app
- Simple routing
  <br>

Ant Design

- A set of high-quality React components out of the box
- Powerful theme customization
- Whole package of design resources and development tools

GreenSock

- An industry standard animation library that lets you craft high performance animation

React Plotly

- Easy to use to embed D3 charts
- This React component takes the chart type, data and styling as Plotly.JSON in its data and layout props, then draws the chart using Plotly.js.

Redux state management

- Redux helps you write applications that behave consistently
- Centrilize your application's state and logic
- The Redux DevTools make it easy to trace bugs
<!-- Todo! Update this -->

### [Backend](https://github.com/Lambda-School-Labs/scribble-stadium-be) built using:

Express

- Built in routing and middleware
- Useful add-ons such as helmet and CORS

Swagger Editor Documentation

- Defines and documents RESTful APIs

## API's

### JWT & Bcrypt

JSON Web Tokens are an industry standard authentication solution. Paired with Bcrypt for hashing passwords, which allows secure local password authentication without reliance on third party solutions.

### Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
*  BROWSER=none
*  REACT_APP_ENDPOINT=http://localhost:3000
```

## Testing

Jest

- Simple testing
- Mocking of dependencies
- Promotes consistent unit testing

## Installation Instructions

<!-- Todo! Update this -->

Clone repo

```
git clone https://github.com/Lambda-School-Labs/scribble-stadium-fe

cd scribble-stadium-fe/
```

Install Dependencies

```
## Setting up the App
Frontend:
- npm install
- add a new .env file with the info provided by your TPM
- npm start
- open localhost:3000
- Note: Okta auth will only work on port 3000 at this time. If you have something running on another port you may encounter a CORS error
Backend
- npm install
- add a new .env file with the info provided by your TPM (if you are using something other than Docker (like Postgres), add it to your backend .env file instead of the docker url
- npm start
```

## Login Credentials

User: llama001@maildrop.cc
Pw: Test001Test

Run Test

```
npm test
```

Clone and download the [backend](https://github.com/Lambda-School-Labs/scribble-stadium-be)

Follow backend set up guides
<br>
<br>
Run the application locally

```
npm dev
```

## Other Scripts

```
* build - creates a build of the application
* dev - runs the development server
* test - runs tests as defined in *.spec.ts files
* lint - format and correct errors with Prettier
```

## Contributing

When contributing to this repository, please first discuss the change you wish to make with the owners of this repository.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing codebase, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported on Trello.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the goals of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be as well.

#### Pull Request Guidelines

- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number if applicable.
- You must have at least two approved reviews from other developers before the release manager will merge your pull request.

- Please see [Labs Gitflow](https://github.com/Lambda-School-Labs/labs28-gitflow.git) for proper flow on all your pull requests.

## Documentation

- This is the link to the proper glossary documentation for the project: [Click Here](https://docs.google.com/document/d/1I2dtnjUtSmGxIfcuUWKrIRBhrCAFlmQ0RnJ3DZJIy4g/edit)

<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
