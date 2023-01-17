var Hangman = /** @class */ (function () {
    function Hangman(word) {
        this.word = word.toUpperCase();
        this.guessStr = "";
        this.wrongGuesses = 0;
        this.correctGuesses = 0;
        var guessDiv = document.getElementById('guessDiv');
        for (var i = 0; i < this.word.length; i++) {
            this.guessStr += "_";
        }
        this.printGuessStr(guessDiv);
    }
    Hangman.prototype.checkGuess = function (letter) {
        console.log(letter);
    };
    Hangman.prototype.checkWinLoss = function () {
        if (this.wrongGuesses === 6)
            return 0;
        else if (this.correctGuesses === this.word.length)
            return 1;
        else
            return 2;
    };
    Hangman.prototype.printGuessStr = function (divElement) {
        var tempStr = "";
        console.log(this.guessStr);
        console.log(this.guessStr.length);
        for (var i = 0; i < this.guessStr.length; i++) {
            tempStr += this.guessStr[i] + " ";
        }
        console.log(tempStr);
        if (divElement != null) {
            divElement.innerText = tempStr;
        }
    };
    return Hangman;
}());
var hangman = new Hangman("apple");
var letterBtns = document.querySelectorAll('.letterBtns');
letterBtns.forEach(function (button) {
    button.addEventListener("click", function () {
        hangman.checkGuess(button.innerText);
    });
});
