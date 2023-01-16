var Hangman = /** @class */ (function () {
    function Hangman(word) {
        this.word = word;
    }
    Hangman.prototype.guess = function (letter) {
    };
    Hangman.prototype.printOut = function () {
        console.log(this.word);
    };
    return Hangman;
}());
var hangman = new Hangman("apple");
hangman.printOut();
