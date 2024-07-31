/* 
IF (palyginimas)

SABLONAI:
if () {}
if () {} else {}
if () {} else  if{}
if () {} else  if{} else {}
if () {} ... else  if{} ...
if () {} ... else  if{} ... else {}

PALYGINIMO OPERATORIAI:
visi: >, <, >=, <=, !=, ===, !==
naudotini: >, <, >=, <=, ===, !==
nenaudotini: ==, !=

ZINOTINI DALYKAI:
-true pozytivus, false negatyvus
-visi skaiciai yra pozityvus, isskyrus nuli (0)
-visi stringai yra pozityvus, isskyrus tusti ('')
-visi array ([]) yra pozityvus
-visi object ({}) yra pozityvus

*/


console.log('START');

if (5 * 7 == 35) {
    console.log('yes');
}

if (4 > 3) {
    console.log('logika... kai if-true');
} else {
    console.log('logika... kai if-flase');
}

if (true && false) {
    console.log('logika... kai if-true');
} else {
    console.log('logika... kai if-flase');
}
console.log('END');
console.log('--------------');


const diena = 1;
let dienosPavadinimas = '---';

if (diena === 1) {
    dienosPavadinimas = 'pirmas';
} else if (diena === 2) {
    dienosPavadinimas = 'antras';
} else if (diena === 3) {
    dienosPavadinimas = 'trecias';
} else {
    dienosPavadinimas = 'nepradek beprociuot';
}

console.log(dienosPavadinimas);
console.clear();

// code nesting
const colors = ['red', 'green', 'blue']
const color = 'green';

if (color === colors[0]) {
    console.log('Raudona');
} else {
    if (color === colors[1]) {
        console.log('Zalia');
    } else {
        if (color === colors[2]) {
            console.log('Melyna');
        } else {
            console.log('ai ai ai');
        }
    }
}

