/*
NUMBER (skaiciai)

KINTAMUJU INICIAVIMAS:
-const (default)
-let (kai reiksme turi keistis)
-var  (nenaudoti, nebent zinai ka darai)
- niekaip neinicijuoti (no no no tsk tsk tsk) (elgsis kaip var)

Kokie buna skaicia:
-teigiami/neigiami ( 1, 2, 3, -1, -2, -3)
-sveiki/desimtainiai (1, 2, 1.1, 2.2)
-normalus/nenormalus ()

Nenormalus "skaicius":
 - NaN (skaiciaus tipo klaida)
 -Infinity
 - -Infinity

 Operatioriai:
    - aritmetiniai: +, -, /, *, %, ++, --
    - aritmetiniai priskyrimo: += -=, /=, *=, %=,
 */

console.log();

const a = 5;
let b = 7;
var c = 34*4-8+45*7/4;

console.log(a);
console.log(b);
console.log(c);
console.clear();

const age = 99;
console.log(age);

const mark1 = 10;
const mark2 = 6;
const mark3 = 4;
const mark4 = 9;
const mark5 = 2;

const marksTotal =mark1+mark2;

console.log(marksTotal);

let marksSum = 0
console.log(marksSum);

marksSum = marksSum + mark1

console.log(marksSum);

marksSum = marksSum + mark2

console.log(marksSum);

marksSum = marksSum + mark3

console.log(marksSum);

marksSum = marksSum + mark4

console.log(marksSum);

marksSum = marksSum + mark5

console.log(marksSum);

console.clear();

let total = 0;
console.log(total);

total = total + 100
console.log(total);

total = total + 25
console.log(total);

total = total + 25
console.log(total);

total = total % 10
console.log(total);

console.clear();

const number = 54;
const div = 5;

const mod = number % div;
const integer =  (number - mod) / div;

console.log(mod);
console.log(integer);

console.clear();

const day=2;
const weekday = day % 7;

console.log(weekday);

/*
rez    d
1      1
2      2
3      3
4      4
5      5
6      6
0      7

*/

console.clear();

let gg = 0;
console.log(gg);

gg = gg + 100
console.log(gg);

gg /= 10
console.log(gg)
gg *= 15
console.log(gg)

console.clear();

let i = 0;

i += 1;
console.log(i);

i++;
console.log(i);
i++;
console.log(i);
++i;
console.log(i);

console.clear();

let m = 0;
console.log(m);
console.log(++m);
console.clear();


// savarankiskas testas


const thing = 44;
const ling = 6;
const ale = thing % ling;

console.log(ale);
console.log(45 % 8);

console.clear();
// how many lamps fit in a box

let boxSize = 15;
let lampSize = 7;

const maxFit = boxSize / lampSize;  
const spaceTaken = maxFit * lampSize;
const spaceLeft = boxSize % lampSize;


console.log(maxFit, spaceTaken, spaceLeft);

// kebabai
console.clear();

let kebabas = 10;
let suvalgiau = kebabas - 1;

console.log(kebabas);
console.log(suvalgiau);
console.log(suvalgiau--);
console.log(suvalgiau--);
console.log(--suvalgiau);
console.log(--suvalgiau);
console.log(--suvalgiau);
console.log(--suvalgiau);
console.log(suvalgiau--);
console.log(suvalgiau--);

let nusipirkau = suvalgiau + 1;

console.log(nusipirkau);
console.log(nusipirkau++);
console.log(nusipirkau++);
console.log(++nusipirkau);
console.log(++nusipirkau);
console.log(++nusipirkau);
console.log(++nusipirkau);

let velValgau = nusipirkau - 1;

console.log(velValgau);
console.log(velValgau--);
console.log(velValgau--);
console.log(--velValgau);
console.log(--velValgau);
console.log(--velValgau);
console.log(--velValgau);
console.log(--velValgau);

