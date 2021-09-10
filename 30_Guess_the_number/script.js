// let namePlayer;
let numberOfGuesses = 5;
let currentGuess;

// Vragen naam speler
const namePlayer = prompt(`Welkom, wat is je naam?`)

// Groeten met naam speler
alert('Hi ' + namePlayer + ' , wat leuk dat je mee doet met dit spel.');

alert('In dit spel ga je een nummer raden tussen 0 en 25.')

// Random nummer creëren
createRandomNumber = Math.floor(Math.random() * 26);
console.log('Random nummer is ' + createRandomNumber);

// Spel met loop (5x raden)
while (currentGuess !== createRandomNumber) {
    currentGuess = parseInt(prompt("Ok, vul een getal in"));
    numberOfGuesses--;

    if (numberOfGuesses < 1) {
        alert("Jammer, dat was je laaste kans, het spel is afgelopen, tot de volgende keer " + namePlayer + "!");
        break
    }

    if (currentGuess != createRandomNumber) {
        alert("Dit is niet juist, je hebt nog " + numberOfGuesses + " kans(en), probeer opnieuw");
    }

    else if (currentGuess === createRandomNumber) {
        alert("Proficiat " + namePlayer + "! " + currentGuess + " is het juiste nummer, tot ziens!")
        break
    }
}

