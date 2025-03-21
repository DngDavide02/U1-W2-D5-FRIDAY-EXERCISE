/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["redfish", "dog", "cat", "hamster"];
for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

const alfabetPets = pets.sort();
console.log(alfabetPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const reversePets = pets.reverse();
console.log(reversePets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

let movePet = pets.splice(0, 1)[0];
pets.push(movePet);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

function randomLetter() {
  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLetter = Math.floor(Math.random() * letter.length);
  return letter.charAt(randomLetter);
}

for (i = 0; i < cars.length; i++) {
  licensePlateCode = randomLetter() + randomLetter() + Math.floor(Math.random() * 10000) + randomLetter();
  cars[i].licensePlate = licensePlateCode;
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

let newCar = { brand: "Porche", model: "911", color: "light-blue", trims: ["sport", "style"] };
cars.push(newCar);
cars[cars.length - 1].licensePlate = licensePlateCode;
for (i = 0; i < cars.length; i++) {
  cars[i].trims.pop();
}

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (i = 0; i < cars.length; i++) {
  let firstTrim = cars[i].trims[0];
  justTrims.push(firstTrim);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let index = 0;
let newNumArray = [];
while (numericArray[index] !== 32 && index < numericArray.length) {
  newNumArray.push(numericArray[index]);
  index++;
}
console.log(newNumArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let alfabetPosition = [];
for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alfabetPosition.push(1);
      break;

    case "b":
      alfabetPosition.push(2);
      break;

    case "c":
      alfabetPosition.push(3);
      break;

    case "d":
      alfabetPosition.push(4);
      break;

    case "e":
      alfabetPosition.push(5);
      break;

    case "f":
      alfabetPosition.push(6);
      break;

    case "g":
      alfabetPosition.push(7);
      break;

    case "h":
      alfabetPosition.push(8);
      break;

    case "i":
      alfabetPosition.push(9);
      break;

    case "j":
      alfabetPosition.push(10);
      break;

    case "k":
      alfabetPosition.push(11);
      break;

    case "l":
      alfabetPosition.push(12);
      break;

    case "m":
      alfabetPosition.push(13);
      break;

    case "n":
      alfabetPosition.push(14);
      break;

    case "o":
      alfabetPosition.push(15);
      break;

    case "p":
      alfabetPosition.push(16);
      break;

    case "q":
      alfabetPosition.push(17);
      break;

    case "r":
      alfabetPosition.push(18);
      break;

    case "s":
      alfabetPosition.push(19);
      break;

    case "t":
      alfabetPosition.push(20);
      break;

    case "u":
      alfabetPosition.push(21);
      break;

    case "v":
      alfabetPosition.push(22);
      break;

    case "w":
      alfabetPosition.push(23);
      break;

    case "x":
      alfabetPosition.push(24);
      break;

    case "y":
      alfabetPosition.push(25);
      break;

    case "z":
      alfabetPosition.push(26);
      break;
  }
}

console.log(alfabetPosition);
