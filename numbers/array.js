/*
ARRAY - sarasas, masyvas, matrica, list'as, arejas




*/

// lauztiniai skliaustai

const empty =[];
console.log(empty);

const marks = [8, 6, 3, 4, 7];
console.log(marks);

const studentNames = ['Jonas', 'Kazimieras', 'Barbora'];
console.log(studentNames);

const mixList = [
    1, 
    'a', 
    true, 
    [], 
    [1, 2], 
    ['hi','bye'], 
    [false, true]
];

console.log(mixList);
const marksCount = marks.length;
console.log(marksCount);

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

console.clear();

const dictionary = ['labas', 'vakaras'];

const word1 = dictionary[0];
const word2 = dictionary[1];

const letter1 = word1[0];
const letter2 = word2[1];

const letter11 = dictionary[0][0];

console.log(letter11);
console.clear();

const pazymiai = [10, 2, 8, 4, 6]

//koks pazymiu vidurkis

let suma = pazymiai[0] + pazymiai[1] + pazymiai[2] + pazymiai[3] + pazymiai[4];
let kiekis = pazymiai.length;
const vidurkis = suma / kiekis;
console.log('suma', suma);
console.log('kiekis', kiekis);
console.log('vidurkis', vidurkis);
console.log('----------------');

let tempSuma = 0;
let index = 0;
console.log(tempSuma);

tempSuma += pazymiai[index++]
tempSuma += pazymiai[index++]
tempSuma += pazymiai[index++]
tempSuma += pazymiai[index++]
tempSuma += pazymiai[index++]

console.log(index, tempSuma);

console.clear();

const colors = ['red', 'green', 'blue'];

// Lovely color: red, green, blue!
let colorsStr = 'Lovely colors: ';
