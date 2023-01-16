class Hangman {
    private word: string;
    private guessStr: string;
    private guesses: number;

    public constructor(word: string) {
        this.word = word;
        this.guessStr = "";
        this.guesses = 0;

        const guessDiv = document.getElementById('guessDiv');

        for (let i: number = 0; i < this.word.length; i++)
        {
            this.guessStr += "_";
        }

        this.printGuessStr(guessDiv);
    }

    public checkGuess(letter: string) {

    }

    public checkWinLoss() {
        
    }

    public printGuessStr(divElement: HTMLElement | null) {
        let tempStr: string = "";
        console.log(this.guessStr);
        console.log(this.guessStr.length);

        for (let i: number = 0; i < this.guessStr.length; i++)
        {
            tempStr += this.guessStr[i] + " ";
        }

        console.log(tempStr);

        if (divElement != null) {
            divElement.innerText = tempStr;
        }
    }
}

const hangman = new Hangman("apple");

