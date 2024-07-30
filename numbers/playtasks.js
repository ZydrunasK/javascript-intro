
// Kintamuju iniciavimas
// ----1----

console.log('----1----');
const nine = 9;
console.log(nine);
const eight = 8;
console.log(eight);
const seven = 7;
console.log(seven);

// ----2----

console.log('----2----');
const ap = 'apple';
console.log(ap);
const pe = 'pear';
console.log(pe);
const df = 'dragon fruit';
console.log(df);

// ----3----

console.log('----3----');
const liNumb1 = [8, 4, 9, 2, 6];
console.log(liNumb1);
const liNumb2 = [7, 9, 1, 6, 3];
console.log(liNumb2);
const liNumb3 = [5, 1, 2, 3, 6];
console.log(liNumb3);

// ----4----

console.log('----4----');
const liStr1 = ['as', 'tu', 'dar', 'du', 'kartus'];
console.log(liStr1);
const liStr2 = ['zodis', 'bodis', 'pica', 'su', 'ananasais'];
console.log(liStr2);
const liStr3 = ['kebabai', 'cesnakiniu', 'arba', 'pikantisku', 'padazu'];
console.log(liStr3);

// Veiksmai su kintamaisiais

console.log('-------------------------');
console.log('Veiksmai su kintamaisiais');

// ----1----

console.log('----1----');
const sumNumbers = nine + eight + seven;
console.log(sumNumbers);

// ----2----

console.log('----2----');
const sumStr = ap + ' ' + pe + ' ' + df; 
console.log(sumStr);

// ----3----

console.log('----3----');
let index = 0;
let sumListNumb1 = liNumb1[index++];
sumListNumb1 -= liNumb1[index++];
sumListNumb1 += liNumb1[index++];
sumListNumb1 -= liNumb1[index++];
sumListNumb1 += liNumb1[index++];
console.log(sumListNumb1);

let index1 = 0;
let sumListNumb2 = liNumb2[index1++];
sumListNumb2 -= liNumb2[index1++];
sumListNumb2 += liNumb2[index1++];
sumListNumb2 -= liNumb2[index1++];
sumListNumb2 += liNumb2[index1++];
console.log(sumListNumb2);

let index2 = 0;
let sumListNumb3 = liNumb3[index2++];
sumListNumb3 -= liNumb3[index2++];
sumListNumb3 += liNumb3[index2++];
sumListNumb3 -= liNumb3[index2++];
sumListNumb3 += liNumb3[index2++];
console.log(sumListNumb3);

// ----4----

console.log('----4----');
let index3 = liStr1.length -1;
let revLiStr1 = liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--]
console.log(revLiStr1);

let index4 = liStr2.length -1;
let revLiStr2 = liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--]
console.log(revLiStr2);

let index5 = liStr3.length -1;
let revLiStr3 = liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--]
console.log(revLiStr3);

// Kintamuju palyginimas

console.log('-------------------------');
console.log('Kintamuju palyginimas');

const nr1 = 5;
const nr2 = 2;
const txt1 = 'hello';
const txt2 = 'goodbye';


// ----1----

console.log('----1----');

console.log('----a.----');
if (nr1 > nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

console.log('----b.----');
if (nr1 < nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('----c.----');
if (nr1 === nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('----d.----');
if (nr1 !== nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('----e.----');
if (nr1 >= nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
console.log('----f.----');
if (nr1 <= nr2) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}
