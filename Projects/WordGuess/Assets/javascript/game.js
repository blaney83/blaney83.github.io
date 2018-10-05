
var game = {

    state: 0,

    words: ["richardhendricks", "bighead", "gilfoyle", "dinesh", "monica", "jareddunn", "gavinbelson", "jianyang", "erlichbachman", "lauriebream", "russhanneman", "jackbarker", "hoover"],

    var: {
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
    },

    gameSetup: function (event) {
        this.var.answer = this.words[Math.floor(Math.random() * this.words.length)];
        this.var.ansArr = this.var.answer.split("");
        this.var.emptArr = this.var.answer.split("");
        for (i = 0; i < this.var.emptArr.length; i++) {
            this.var.emptArr.splice(i, 1, "_");
        };
        document.getElementById("spaces").innerHTML = this.var.emptArr;
        this.var.ansLength = this.var.emptArr.length;
        this.var.lives = this.var.emptArr.length - 1;
        document.getElementById("playerLives").innerHTML = this.var.lives;
        this.var.posLetters = [];
        for (var i = 65; i < 91; i++) {
            this.var.posLetters.push(String.fromCharCode(i).toLowerCase());
        };
        document.getElementById("alphabet").innerHTML = this.var.posLetters;
        document.getElementById("wins").innerHTML = this.var.wins;
        document.getElementById("losses").innerHTML = this.var.losses;
        this.state = this.state + 1;
    },

    gamePlay: function (event) {
        var key = event.key;
        if (this.var.posLetters.includes(key)) { //checks alphabet
            if (this.var.ansArr.includes(key)) {
                this.var.ansArr.forEach(function (a, i, e) {
                    if (a === key) {
                        game.var.emptArr.splice(i, 1, key);
                    };
                });
                document.getElementById("spaces").innerHTML = this.var.emptArr;
                for (var i = 0; i < this.var.posLetters.length - 1; i++) {
                    if (this.var.posLetters[i] === key) {
                        this.var.posLetters.splice(i, 1);
                    }
                };
                document.getElementById("alphabet").innerHTML = this.var.posLetters;
                var correctGuesses = [];
                correctGuesses.push(key);
                document.getElementById("rightLetters").innerHTML = correctGuesses;
                if (this.var.emptArr.toString() === this.var.ansArr.toString()) {
                    this.var.wins = this.var.wins + 1;
                    document.getElementById("wins").innerHTML = this.var.wins;
                    $(".goodGame").css("visibility", "visible");
                    this.state = this.state - 1;
                    //you win!!!
                }
            } else {
                if (this.var.lives > 1) {
                    this.var.lives = this.var.lives - 1;
                    document.getElementById("playerLives").innerHTML = this.var.lives;
                    var incorrectGuesses = [];
                    incorrectGuesses.push(key);
                    document.getElementById("wrongLetters").innerHTML = incorrectGuesses;
                    for (var i = 0; i < this.var.posLetters.length - 1; i++) {
                        if (this.var.posLetters[i] === key) {
                            this.var.posLetters.splice(i, 1);
                        }
                    };
                    document.getElementById("alphabet").innerHTML = this.var.posLetters;
                } else {
                    this.var.lives = this.var.lives - 1;
                    document.getElementById("playerLives").innerHTML = this.var.lives;
                    this.var.losses = this.var.losses + 1;
                    document.getElementById("losses").innerHTML = this.var.losses;
                    $(".goodGame").css("visibility", "visible");
                    this.state = this.state - 1;
                    //game over!!!
                }
            }
        }//else nothing. this ensures that the key is in the possible letters
    },
}//this is the game as an object

document.onkeyup = addEventListener("keyup", function (event) {
    if (game.state === 0) {
        $(".start").css("visibility", "hidden");
        $(".goodGame").css("visibility", "hidden");
        game.gameSetup(event);
    } else{
        game.gamePlay(event);
    }
})
        
