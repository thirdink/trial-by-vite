# React js pixel force project 

This project is a React application built with TypeScript and Vite.

## Installation

Follow these steps to install and run the project:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/thirdink/trial-by-vite.git
```
```bash
cd <project-directory>
```

2. Install the dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

## Usage

The application will be available at http://localhost:5173/

http://localhost:5173/onboarding for the onboarding screen (Click login button to go to login screen)

please visit http://localhost:5173/login for the login screen (back button take you back to onboarding screen, login button takes to to / home screen )

http://localhost:5173/explore for the dashboard screen 


## Implementation and challenges

Regarding the implementation of this project I decided to use vite as a bundler and react as a framework, I also used typescript to have a better typing and avoid errors in the code, I used the react-router-dom library to manage the routes of the application, I used the tailwindcss library to manage the styles of the application, and also added nextui for the buttons layout. I focused on the code quality by implementing as much resuable components as possible in the given time frame. 

some of the challenges I had were the following:

- finding the San Fran font from the figma file since its built in the mac and not as accessible as say google fonts.
- in the explore page I had some problem with screen overflow for horizontal scrolling .
- making in responsive for bigger screens without the designs.
