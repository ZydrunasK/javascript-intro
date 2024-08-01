
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
const liN1 = [8, 4, 9, 2, 6];
console.log(liN1);
const liN2 = [7, 9, 1, 6, 3];
console.log(liN2);
const liN3 = [5, 1, 2, 3, 6];
console.log(liN3);

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

function sumNum(nr1, nr2, nr3) {
    return 'Sum using function: ' + (nr1 + nr2 + nr3);
}
function sumStrings(str1, str2, str3) {
    return `String sum using function: ${str1} ${str2} ${str3} `
}



console.log('----1----');
const sumNumbers = nine + eight + seven;
console.log(sumNumbers);
console.log(sumNum(seven, eight, nine));

// ----2----

console.log('----2----');
const sumStr = ap + ' ' + pe + ' ' + df; 
console.log(sumStr);
console.log(sumStrings(ap, pe, df));

// ----3----

function arrayMath(nr1, nr2, nr3, nr4, nr5) {
    return nr1[0] - nr2[1] + nr3[2] - nr4[3] + nr5[4];
}
console.log('----3----');

let liNumMath1 = arrayMath(liN1, liN1, liN1, liN1, liN1)
let liNumMath2 = arrayMath(liN2, liN2, liN2, liN2, liN2)
let liNumMath3 = arrayMath(liN3, liN3, liN3, liN3, liN3)

// new using function
console.log(liNumMath1);
console.log(liNumMath2);
console.log(liNumMath3);

// old using individual
let index = 0;
let sumListNumb1 = liN1[index++];
sumListNumb1 -= liN1[index++];
sumListNumb1 += liN1[index++];
sumListNumb1 -= liN1[index++];
sumListNumb1 += liN1[index++];
// console.log(sumListNumb1);

let index1 = 0;
let sumListNumb2 = liN2[index1++];
sumListNumb2 -= liN2[index1++];
sumListNumb2 += liN2[index1++];
sumListNumb2 -= liN2[index1++];
sumListNumb2 += liN2[index1++];
// console.log(sumListNumb2);

let index2 = 0;
let sumListNumb3 = liN3[index2++];
sumListNumb3 -= liN3[index2++];
sumListNumb3 += liN3[index2++];
sumListNumb3 -= liN3[index2++];
sumListNumb3 += liN3[index2++];
// console.log(sumListNumb3);

// ----4----

function liStrRev(s1, s2, s3, s4, s5) {
    return `${s5[4]}, ${s4[3]}, ${s3[2]}, ${s2[1]}, ${s1[0]}`
}
const liStrRev1 = liStrRev(liStr1, liStr1, liStr1, liStr1, liStr1); 
const liStrRev2 = liStrRev(liStr2, liStr2, liStr2, liStr2, liStr2); 
const liStrRev3 = liStrRev(liStr3, liStr3, liStr3, liStr3, liStr3); 

console.log('----4----');

// new using function
console.log(liStrRev1);
console.log(liStrRev2);
console.log(liStrRev3);

// old using individual
let index3 = liStr1.length -1;
let revLiStr1 = liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--] + ', '
revLiStr1 += liStr1[index3--]
// console.log(revLiStr1);

let index4 = liStr2.length -1;
let revLiStr2 = liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--] + ', '
revLiStr2 += liStr2[index4--]
// console.log(revLiStr2);

let index5 = liStr3.length -1;
let revLiStr3 = liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--] + ', '
revLiStr3 += liStr3[index5--]
// console.log(revLiStr3);

function name(params) {
    
}
// Kintamuju palyginimas

console.log('-------------------------');
console.log('Kintamuju palyginimas');

function numMore(nr1, nr2) {
nr1 > nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

function numLess(nr1, nr2) {
    nr1 < nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

function numEqual(nr1, nr2) {
    nr1 === nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

function numNotEqual(nr1, nr2) {
    nr1 !== nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

function numMoreEqual(nr1, nr2) {
    nr1 >= nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

function numLessEqual(nr1, nr2) {
    nr1 <= nr2 ? 'Pomidoras' : 'Bandykite kitą kartą.';
};

const nr1 = 3;
const nr2 = 5;
const txt1 = 'hello';
const txt2 = 'goodbye';



// ----1----

console.log('----1----');

console.log('----a.----');
numMore(nr1, nr2);

console.log('----b.----');
numLess(nr1, nr2);

console.log('----c.----');
numEqual(nr1, nr2);

console.log('----d.----');
numNotEqual(nr1, nr2);

console.log('----e.----');
numMoreEqual(nr1, nr2);

console.log('----f.----');
numLessEqual(nr1, nr2);
