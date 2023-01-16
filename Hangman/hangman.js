var Hangman = /** @class */ (function () {
    function Hangman(word) {
        this.word = word;
        this.guessStr = "";
        var guessDiv = document.getElementById('guessDiv');
        for (var i = 0; i < this.word.length; i++) {
            this.guessStr += "_";
        }
        this.printGuessStr(guessDiv);
    }
    Hangman.prototype.checkGuess = function (letter) {
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
