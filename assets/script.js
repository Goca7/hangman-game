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
    function createElements(elType, parentEle, output, cla) {
        const temp = document.createElement(elType);
        temp.classList.add(cla);
        parentEle.append(temp);
        temp.textContent = output;
        return temp;
    }
    // This function is responsible for updating the game's score and handling the game's end condition.
    function updateScore() {
        score.textContent = `Total Letters Left: ${game.total}`;
        if (game.total <= 0) {
            console.log("game over");
            score.textContent = "Game Over";
            btn.style.display = "block";
        }
    }

    // This function handles the game's logic when a letter is guessed.
    function builder() {
        letters.innerHTML = "";
        puzzle.innerHTML = "";
        game.solution.forEach((lett) => {
            let div = createElements("div", puzzle, "-", "boxE");
            if (lett === " ") {
                div.style.borderColor = "white";
                div.textContent = " ";
            } else {
                game.total++;
            }
            game.puzz.push(div);
        });
        updateScore(); // Call updateScore after building the puzzle


    };

});