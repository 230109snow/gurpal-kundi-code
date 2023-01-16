class Hangman {
    private word: string;
    public constructor(word: string) {
        this.word = word;
    }

    public guess(letter: string) {

    }

    public printOut() {
        console.log(this.word);
    }
}

const hangman = new Hangman("apple");
hangman.printOut();

