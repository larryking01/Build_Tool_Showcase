# Build_Tool_Showcase
A simple and educational web application that displays frontend build tools, built with **TypeScript**, **Sass**, and powered by modern tooling like **Webpack**, **Jest**, **ESLint**, and **Prettier**.



# Project Overview
This project demonstrates how to:
- Build a TypeScript-based web app using modern build tools
- Use Sass for styling
- Configure Webpack for bundling in both development and production
- Apply consistent linting and formatting with ESLint and Prettier
- Run and write tests with Jest and measure code coverage
- Use `husky` and `lint-staged` for pre-commit code quality enforcement


# Technologies Used
- **TypeScript**
- **Sass (SCSS)**
- **Webpack**
- **Jest**
- **ESLint + Prettier**
- **Husky + lint-staged**


# Setup Instructions
1. # Clone the repository:
   git clone https://github.com/larryking01/Build_Tool_Showcase.git
   cd Build_Tool_Showcase


2. # Install dependencies:
npm install


3. # Run the development server:
npm run dev


4. # Build for production:
npm run build


5. # Build Process
# Webpack
webpack.config.js for development (with webpack-dev-server)

webpack.prod.js for optimized production builds (minifies CSS/JS)


# TypeScript
Configured to work with Babel and Webpack

All logic lives in index.ts files inside the src/ folder


# Sass
Styles are written in .scss files and imported into the TypeScript entry point

Sass is processed via sass-loader and bundled by Webpack



# Linting & Formatting
# ESLint
Uses @typescript-eslint to enforce code quality rules

To run linting manually:
npm run lint


# Prettier
Formats code consistently using the Prettier config

To run prettier manually:
npm run format


# Combined Check:
Check both linting and formatting in one step:

To run check manually
npm run check


# Pre-commit Hook
Configured with husky and lint-staged

Automatically formats and lints staged files before commit


# Available npm Scripts
# Script : Description
# dev	: Start development server with Webpack
# build :	Bundle and optimize project for production
# test :	Run all Jest tests
# lint :	Run ESLint on TypeScript files
# format :	Format all relevant files using Prettier
# check:format : Check if files are properly formatted
# check :	Run both lint and format checks
# prepare :	Setup Husky Git hooks
# precommit :	Lint and format staged files before commit



# Testing
Testing was done with jest. The single test file, index.test.ts lies in the src/__tests__ folder. 
This file contains all tests.

# Running Tests
To run all unit tests using Jest:

# npm run test


# With Code Coverage
To generate a coverage report:

# npm test -- --coverage
Coverage reports are output to the /coverage directory. Open coverage/lcov-report/index.html in a browser for a detailed view.



# File Structure
📁 src/
├── index.ts             # Entry point
├── styles/
│   └── main.scss        # Global styles
├── __tests__/
│   └── index.test.ts    # Jest tests
📄 webpack.config.js      # Webpack dev config
📄 webpack.prod.js        # Webpack prod config
📄 .eslintrc              # ESLint rules
📄 .prettierrc            # Prettier rules
📄 .jest.config.json      # Jest configuration

