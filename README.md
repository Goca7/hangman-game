# Hangman Game

Welcome to the **Hangman Game**! This is a web-based word guessing game designed to be both fun and educational. The goal is to guess the hidden word(s) by selecting letters, with each incorrect guess revealing a part of the hangman figure. 

## Table of Contents

- [Hangman Game](#hangman-game)
  - [Table of Contents](#table-of-contents)
  - [Project Goals](#project-goals)
    - [User Goals](#user-goals)
    - [Site Owner Goals](#site-owner-goals)
  - [Features](#features)
    - [Index Page](#index-page)
    - [Game Page](#game-page)
  - [UX/UI](#uxui)
    - [Target Audience](#target-audience)
    - [User Stories](#user-stories)
  - [Design Choices](#design-choices)
    - [Colour Scheme](#colour-scheme)
    - [Fonts](#fonts)
    - [Wireframes](#wireframes)
  - [Testing and Validation](#testing-and-validation)
    - [HTML Validation](#html-validation)
    - [CSS Validation](#css-validation)
    - [JavaScript Validation](#javascript-validation)
    - [Testing Responsiveness](#testing-responsiveness)
  - [Known Bugs](#known-bugs)
  - [Deployment](#deployment)
  - [Sources](#sources)
  - [Future Features](#future-features)
  - [Acknowledgments](#acknowledgments)

## Project Goals

### User Goals

- To play an engaging and educational word guessing game.
- To navigate the game interface quickly and efficiently.
- To enjoy a visually pleasing and responsive user experience across various devices.
- To understand how the game works with minimal instructions.

### Site Owner Goals

- To provide a fun and educational game that can be accessed and enjoyed by a wide audience.
- To create a web application that is easy to maintain and update with new words or phrases.
- To ensure the game is accessible and usable on various devices and browsers.


## Features

### Index Page

The index page of the Hangman Game serves as the entry point to the game. It includes the following features:

- **Start Game Button**: 
  - Positioned at the top center of the page, this button is the main call-to-action, allowing users to start the game. Once clicked, it triggers the setup of the game and prepares the game area for user interaction.

- **Gallows Display**:
  - A visual representation of the gallows is prominently displayed on the page. This will serve as the base where the hangman figure appears as incorrect guesses are made during the game. The gallows consist of a vertical pole, a horizontal beam, and a rope where the hangman figure will be "hung."
  
- **Minimalistic Design**:
  - The page features a clean and minimalistic design with ample white space, focusing the user's attention on the game elements. This simplicity helps in reducing distractions and enhances the user's gaming experience.

- **Responsive Layout**:
  - The page is designed to be responsive, ensuring that the game layout adjusts appropriately for different screen sizes, from desktops to mobile devices.

- **Interactive Elements**:
  - The start button is the only interactive element on the page before the game begins, providing a clear and straightforward user experience.

This index page sets the stage for the game, focusing on a simple, clean design that centers around the game’s core interactive elements.


### Game Page

- **Interactive Puzzle**: The main feature where users guess letters to reveal the hidden word.
- **Hangman Figure**: A visual representation that builds up with each incorrect guess.
- **Letter Buttons**: Clickable letters for guessing, with feedback on correct or incorrect guesses.


## UX/UI

### Target Audience

- People interested in word games.
- Users looking for a simple and engaging online game.
- Educators seeking tools to help with vocabulary and spelling.

### User Stories

1. As a player, I want the game to start with a random word and a set of blank spaces representing each letter of the word, so that I can begin playing the game.
   
2. As a player, I want to be able to guess a letter, and the game should tell me if it appears in the word or not, so that I can try to guess the word.

3. As a player, I want to win the game when I correctly guess the word, so that I can feel a sense of accomplishment.

4. As a player, I want to lose the game when I run out of guesses, so that I can try again.

5. As a player, I want to be able to restart the game with a new word, so that I can play again.

## Design Choices

### Colour Scheme

- **Palette**: The game employs a minimalist and clean color scheme to ensure a distraction-free user experience that enhances readability and focus on gameplay.
  - **Background Color**: The background is white (`#FFFFFF`), providing a neutral and clean backdrop that allows other elements to stand out clearly.
  - **Text and Interactive Elements**: Letters and interactive elements, such as the alphabet and dashes representing the hidden word, are displayed in black (`#000000`). This high contrast ensures that the text is easily readable against the white background.
  - **Buttons**: The clickable letter buttons have a white background with black text, maintaining consistency with the overall color scheme while providing a clear indication of available and selected letters.
  - **Gallows and Hangman Figure**: The gallows and any parts of the hangman figure that appear as the game progresses are drawn in black (`#000000`), ensuring they are clearly visible and contribute to the game's aesthetic.

This color scheme was chosen to prioritize readability and simplicity, ensuring that the game is both accessible and easy to interact with for all users. The consistent use of black and white provides a timeless, classic look that is both functional and visually appealing.


### Wireframes

- **Main Page Wireframe**: [to be added]
- **Game Page Wireframe**: [to be added]


## Testing and Validation

### HTML Validation

- **Initial Validation**: HTML code was validated using the [W3C Markup Validation Service](https://validator.w3.org/). 
- **Results**: [Link to Validation Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgoca7.github.io%2Fhangman-game%2F)

### CSS Validation

- **Initial Validation**: CSS was validated using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
- **Results**: [Link to Validation Results](http://jigsaw.w3.org/css-validator/validator$link
or
http://jigsaw.w3.org/css-validator/check/referer (for HTML/XML document only))

### JavaScript Validation

- **Code Quality**: JavaScript code was reviewed and tested to ensure all functions operate as expected.
- **Testing**: Two warning issed: 80 Functions declared within loops referencing an outer scoped variable may lead to confusing semantics and 90Unnecessary semicolon.

### Testing Responsiveness

- **Device Testing**: The site was tested on multiple devices including desktop, tablet, and mobile.
- **Browser Testing**: The site was tested across different browsers including Chrome, Firefox, Safari, and Edge.
- **Results**: The site is fully responsive, providing a consistent experience across all tested platforms.
- ![alt text](image.png)

## Known Bugs

None

## Deployment

- **GitHub Pages**: The site was deployed using GitHub Pages. 
- **Live Site**: [Link to Live Site](https://goca7.github.io/hangman-game//)

## Sources

None used








