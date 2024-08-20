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
            score.textContent = "Congratulations!;
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

        // Build the letter buttons
        for (let i = 0; i < 26; i++) {
            let temp = String.fromCharCode(65 + i);
            let div = createElements("div", letters, temp, "box");
            let checker = function (e) {
                div.style.backgroundColor = "#ddd";
                div.classList.remove("box");
                div.classList.add("boxD");
                div.removeEventListener("click", checker);
                checkLetter(temp);
            };
            div.addEventListener("click", checker);
        }

    };
    
    // This function checks if the guessed letter is in the current word.
    function checkLetter(letter) {
        console.log(letter);
        let correctGuess = false;
        game.solution.forEach((ele, index) => {
            if (ele.toUpperCase() === letter) {
                game.puzz[index].textContent = letter;
                correctGuess = true;
                game.total--;
                updateScore();
            }            
        });

        //Increase the wrong guesses count and draw the hangman figure.
        if (!correctGuess) {
            game.wrongGuesses++;
            drawHangman();
        }
    }

    // This function draws the hangman parts as the player makes wrong guesses.
    // It also displays a game over message and a button to restart the game when the player loses.
    function drawHangman() {
        if (game.wrongGuesses <= hangmanParts.length) {
            hangmanParts[game.wrongGuesses - 1].style.display = 'block'; // Show the next hangman part
        }

        if (game.wrongGuesses === hangmanParts.length) {
            score.textContent = "Game Over - You Lost!";
            btn.style.display = "block";
        }
    }
});
