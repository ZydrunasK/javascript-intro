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