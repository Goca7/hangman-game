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
    
    // Start the game when the button is clicked
    btn.addEventListener("click", startGame);

    function startGame() {
        if (myWords.length > 0) {
            btn.style.display = "none";
            game.puzz = [];
            game.total = 0;
            game.wrongGuesses = 0;
            hangmanParts.forEach(part => part.style.display = 'none'); // Reset hangman figure
            game.cur = myWords.shift();
            game.solution = game.cur.split("");
            builder();
        } else {
            score.textContent = "No More Words";
        }
    }

    // This function creates a new HTML element of the specified type, adds a class name, appends it to a parent element, and sets its text content.
// Parameters:
// elType: The type of HTML element to create (e.g., 'div', 'span', 'p', etc.).
// parentEle: The parent element to which the new element will be appended.
// output: The text content of the new element.
// cla: The class name to be added to the new element.
// Returns: The newly created and manipulated HTML element.
});