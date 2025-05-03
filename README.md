# Dashboard App

A modern React dashboard application built with TypeScript and Tailwind CSS.

## Features

- Responsive layout
- Component-based architecture
- Built with React and TypeScript
- Styled with Tailwind CSS
- Uses react-mosaic-component for flexible layouts

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository

   git clone https://github.com/yourusername/dashboard-app.git
   cd dashboard-app

2. Install dependencies

   npm install

3. Start the development server

   npm start

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts

- npm start - Runs the app in development mode
- npm test - Launches the test runner
- npm run build - Builds the app for production
- npm run eject - Ejects from create-react-app

## Docker

This project includes Docker configuration for easy deployment.

### Building and Running with Docker

1. Build the Docker image

   docker build -t dashboard-app .

2. Run the container

   docker run -p 3000:80 dashboard-app

3. Access the application at [http://localhost:3000](http://localhost:3000)

## Project Structure

dashboard-app/
├── public/ # Static files
├── src/ # Source code
│ ├── components/ # React components
│ ├── assets/ # Images, fonts, etc.
│ ├── App.tsx # Main App component
│ └── index.tsx # Entry point
├── Dockerfile # Docker configuration
├── package.json # Dependencies and scripts
└── tsconfig.json # TypeScript configuration
