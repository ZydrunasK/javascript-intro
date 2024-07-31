/* 
FUNCTION - perpanaudojamas logikos blokas
*/

const students = [
    {
        name: 'Jonas',
        marks: [10 , 2, 8, 4, 6],
    },
    {
        name: 'Maryte',
        marks: [9 , 8, 7, 5, 6],
    },
];
// Jono vidurkis 6.
// Marytes vidurkis 7.

let sumJonas = 0;
sumJonas += students[0].marks[0];
sumJonas += students[0].marks[1];
sumJonas += students[0].marks[2];
sumJonas += students[0].marks[3];
sumJonas += students[0].marks[4];

const averageJonas =  sumJonas / students[0].marks.length
console.log(averageJonas);

const msgJonas = 'Studento ' + students[0].name + ' vidurkis ' + averageJonas + '.';
console.log(msgJonas);


function emptyFunc() {
    // tuscia funkcija, kuri nieko nedaro,
    //nes, jos logikos blokas yra tuscia
    // bet... visos funkcijos grazina savo darbo rezultata
}

const ans1 = emptyFunc();
console.log(ans1);

function giveMeFive() {
    return 'five5';
}
console.log(giveMeFive());



function hello(nm) {
    return 'Labas, as ' + nm + '!'
}

console.log(hello('Jonas'));
console.log(hello('Maryte'));
console.log(hello('Petras'));
// Labas, as NAME!

function avrgOfTwo(n1, n2) {
    return (n1+n2) / 2;
}

const a = (7 + 5) / 2;
const b = (11 + 5) / 2;
const c = (11 + 7) / 2;
const d = (13 + 666) / 2;
console.log(a, b, c, d);

const a2 = avrgOfTwo(7, 5);
const b2 = avrgOfTwo(11, 5);
const c2 = avrgOfTwo(11, 7);
const d2 = avrgOfTwo(13, 666);
console.log(a2, b2, c2, d2);

console.clear();

function avrgOfThree(n1, n2, n3) {
    console.log(arguments);
    return (n1+n2+n3) / 3
}
 console.log(avrgOfThree(41, 100, 66));   

 function love(color) {
    return `I love ${color} color!`;
    // return 'I love ' + color + ' color!'
 }

 console.log(love('red'));
 console.log(love('green'));
 console.log(love('blue'));