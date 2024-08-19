document.addEventListener('DOMContentLoaded', function() {
    // Initial game setup object
    const game = { cur: "", solution: "", puzz: [], total: 0, wrongGuesses: 0 };
    // Array of words to be guessed in the game
    const myWords = ["arrow functions", "arithmetic operators", "global variables", "else if statements", "primitive data types", "template literals"];
    const score = document.querySelector(".score");
    const puzzle = document.querySelector(".puzzle");
    const letters = document.querySelector(".letters");
    const btn = document.querySelector("button");
    const hangmanParts = document.querySelectorAll('.hangman-part');  
});