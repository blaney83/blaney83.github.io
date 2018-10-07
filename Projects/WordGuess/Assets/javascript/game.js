
var game = {

//all game except for event-listening invocations are contained in this object

    words: ["richardhendricks", "bighead", "gilfoyle", "dinesh", "monica", "jareddunn", "gavinbelson", "jianyang", "erlichbachman", "lauriebream", "russhanneman", "jackbarker", "hoover"],

    //word bank can be added to without doing anything else. all operations on the strings inside the word bank are automated below. numbers, spaces and special characters should be avoided. additional work could be done to turn the words into objects and add relavent information/fun facts about each of the characters, images, and hints to give to the player.

    state: 0,
    answer: "",
    ansArr: [],
    emptArr: [],
    ansLength: 0,
    lives: 0,
    posLetters: [],
    wins: 0,
    losses: 0,
    correctGuesses: [],
    incorrectGuesses: [],

    //the properties/keys above serve as the data storage center for the game. many functions contained in the two methods below pass information into the keys above and display them for the user

    gameSetup: function (event) {

        //runs each time the game resets

        this.answer = this.words[Math.floor(Math.random() * this.words.length)];

        //picks a random word from the word bank

        this.ansArr = this.answer.split("");

        //splits the random work into a array of individual letters as strings and passes this into the answer array which will be used later to compare against the "empty" array the player is building with correct guesses

        this.emptArr = this.answer.split("");

        //this does the same thing as above, but passes the strings into a separate array where all the letters will be replaced with underscores

        for (var i = 0; i < this.emptArr.length; i++) {
            this.emptArr.splice(i, 1, "_");
        };
        document.getElementById("spaces").innerHTML = this.emptArr;

        //replaces the letters in empArr with _. this creates a "blank" space for each letter in the answer and displays empty array to the player for length reference

        this.ansLength = this.emptArr.length;

        //computes the length of the word and passes that information to the "data center" above. has no functionality at this time, be could be integrated as part of a difficult setting in the future (toggling the number of lives based upon the length of the word)

        this.lives = this.emptArr.length - 1;
        document.getElementById("playerLives").innerHTML = this.lives;

        //calculates lives. -1 at the moment, but can be adjusted to adjust the difficulty. lives are then sent to the html for display to the player.

        for (var i = 65; i < 91; i++) {
            this.posLetters.push(String.fromCharCode(i).toLowerCase());
        };

        //creates a possible guesses list so the game does not charge for double guesses, listen for anything besides letters and also as a reference for the player.

        document.getElementById("alphabet").innerHTML = this.posLetters;
        document.getElementById("wins").innerHTML = this.wins;
        document.getElementById("losses").innerHTML = this.losses;

        //sends all other information to the browser

        $(".goodGame").css("visibility", "hidden");
        $(".start").css("visibility", "hidden");

        //hides the start and end game screens

        this.state = this.state + 1;

        //changes the game state so that start game does not run again until the game is over
    },

    gamePlay: function (event) {

        //contains all of the operations for gameplay

        var key = event.key;

        //creates a variable to store the key press of the player
        
        if (this.posLetters.includes(key)) {

            //checks the key press against possible answers. if the player has already guessed the letter or pressed something other than a letter, this will not execute and nothing will happen. 

            if (this.ansArr.includes(key)) {

                //checks to see if the player guessed a letter in the answer. executes for a correct guess

                this.ansArr.forEach(function (a, i, e) {
                    if (a === key) {
                        game.emptArr.splice(i, 1, key);
                    };
                });
                document.getElementById("spaces").innerHTML = this.emptArr;

                //finds the index of the correct guess in the answer and splices the letter into the "blank" array in the correct position. looped to handle multiples of the same letter. it then updates the display

                for (var i = 0; i < this.posLetters.length - 1; i++) {
                    if (this.posLetters[i] === key) {
                        this.posLetters.splice(i, 1);
                    }
                };
                document.getElementById("alphabet").innerHTML = this.posLetters;

                //removes the correctly guessed letter from the array containing the possible letter guesses, thereby preventing double guesses and providing an updated list for the player

                correctGuesses = [];
                correctGuesses.push(key);
                document.getElementById("rightLetters").innerHTML = correctGuesses;

                //adds the guess to the correct letters area on the screen for player reference

                if (this.emptArr.toString() === this.ansArr.toString()) {

                    //checks for a win by comparing the original answer to the newly updated "empty" array
                    
                    this.wins = this.wins + 1;
                    document.getElementById("wins").innerHTML = this.wins;

                    //updates wins by 1 on the screen

                    $(".goodGame").css("visibility", "visible");
                    this.state = this.state - 1;

                    //you win!! displays the end game screen for the user. prompts them to press a button to play again and also sets game state back to zero to allow the gameSetup function to run again on the next key press

                }
            } else {

                //contains all code to be run following an incorrect guess by the player

                if (this.lives > 1) {

                    //checks to see if the player just lost their last life. will execute if the player has additional lives and the game is to continue

                    this.lives = this.lives - 1;
                    document.getElementById("playerLives").innerHTML = this.lives;

                    //docks the player a life for an incorrect guess and updates the score

                    incorrectGuesses = [];
                    incorrectGuesses.push(key);
                    document.getElementById("wrongLetters").innerHTML = incorrectGuesses;

                    //documents the incorrect guess for the player to reference

                    for (var i = 0; i < this.posLetters.length - 1; i++) {
                        if (this.posLetters[i] === key) {
                            this.posLetters.splice(i, 1);
                        }
                    };
                    document.getElementById("alphabet").innerHTML = this.posLetters;

                    //removes the guess from the possible letters so that double guesses aren't counted and updates posLetters for player reference

                } else {

                    //contains code to run when the player loses their last life

                    this.lives = this.lives - 1;
                    document.getElementById("playerLives").innerHTML = this.lives;

                    //takes away last life

                    this.losses = this.losses + 1;
                    document.getElementById("losses").innerHTML = this.losses;

                    //updates losses by 1

                    $(".background_img").css("opacity", "0");
                    $(".goodGame").css("visibility", "visible");
                    this.state = this.state - 1;

                    //game over!!! displays the end game screen and resets gamestate to 0 for gameSetup function to run again

                }
            }
        }//else nothing. this ensures that the key pressed is in the possible letters
    },
};//this is the game as an object

document.onkeyup = addEventListener("keyup", function (event) {

    //listens for a keypress to initiate the game

    if (game.state === 0) {

        game.gameSetup(event);

        //ensures the game setup only runs once. without this, new word will be picked on each keypress and thats not really a game at all is it

    } else{

        game.gamePlay(event);

        //if the game is setup but not over (gamestate = 1), invokes the start of gameplay

    }
});