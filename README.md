# Nintendo Clicky Game
### Clicky game using React
*Trilogy Full Stack Flex Bootcamp Assignment*

### Play the game: 
[Nintendo Clicky Game!](https://lamepixie.github.io/Nintendo_clickygame/)

### Download to Play Locally
1. Clone this repo to your local machine:
```
git clone https://github.com/lamepixie/Nintendo_clickygame.git
```
2. Open the repo and execute the following in the bash terminal. Doing so should install the required packages/dependencies:
```
yarn install
```
3. Ready to play? Try:
```
yarn start
```
### Game Screen
![game screen](src/images/Capture.JPG)

# Assignment Breakdown:

## Overview

For this assignment, you'll create a memory game with React. This assignment will require you to break up your application's UI into components, manage component state, and respond to user events.

### Instructions

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.

7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.
