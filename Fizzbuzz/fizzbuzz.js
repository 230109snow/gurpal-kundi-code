let num = 0;
function increment() {
    const countElem = document.getElementById('count');
    countElem.innerText = ++num;
}
function decrement() {
    const countElem = document.getElementById('count');
    countElem.innerText = --num;
}
function reset() {
    const countElem = document.getElementById('count');
    num = 0;
    countElem.innerText = 0;
}

function modifyNum(number) {
    const countElem = document.getElementById('count');
    num += number;
    countElem.innerText = num;
}

function fizzbuzz() {
    input = document.querySelector('#fizzbuzz-input').value
    const outputElem = document.getElementById('fizzbuzz-output');

    if (input <= 0) {
        outputElem.innerText = 'Not a positive integer';
    }
    else {
        let str = 'Given: ' + input + '\n';
        let fizz = 'Fizz';
        let buzz = 'Buzz';
        let fizzBuzz = 'Fizzbuzz';

        for (let i = 1; i <= input; i++) {
            let tempStr = '';

            if (i % 15 === 0) {
                tempStr = fizzBuzz + ' (' + i + ')\n';
            }
            else if (i % 5 === 0) {
                tempStr = buzz + ' (' + i + ')\n';
            }
            else if (i % 3 === 0) {
                tempStr = fizz + ' (' + i + ')\n';
            }
            else {
                tempStr = i + '\n';
            }

            str += tempStr;
        }

        outputElem.innerText = str;
    }
    //you'll want to look up
    //javascript loops (either while, or for will work well here)
    //conditionals (if, elseif, else) or switch statements
    //modulo operator will also come handy here.
}

function calculator(value) {
}