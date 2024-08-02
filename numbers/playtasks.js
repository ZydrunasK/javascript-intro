// Kintamuju iniciavimas
// ----1----

console.log("----1----");
const nine = 9;
console.log(nine);
const eight = 8;
console.log(eight);
const seven = 7;
console.log(seven);
// ----2----

console.log("----2----");
const ap = "apple";
console.log(ap);
const pe = "pear";
console.log(pe);
const df = "dragon fruit";
console.log(df);
// ----3----

console.log("----3----");
const liN1 = [8, 4, 9, 2, 6];
console.log(liN1);
const liN2 = [7, 9, 1, 6, 3];
console.log(liN2);
const liN3 = [5, 1, 2, 3, 6];
console.log(liN3);
// ----4----

console.log("----4----");
const liStr1 = ["as", "tu", "dar", "du", "kartus"];
console.log(liStr1);
const liStr2 = ["zodis", "bodis", "pica", "su", "ananasais"];
console.log(liStr2);
const liStr3 = ["kebabai", "cesnakiniu", "arba", "pikantisku", "padazu"];
console.log(liStr3);
// Veiksmai su kintamaisiais

console.log("-------------------------");
console.log("Veiksmai su kintamaisiais");
// ----1----

function sumNum(nr1, nr2, nr3) {
  return "Sum using function: " + (nr1 + nr2 + nr3);
}
function sumStrings(str1, str2, str3) {
  return `String sum using function: ${str1} ${str2} ${str3} `;
}

console.log("----1----");
const sumNumbers = nine + eight + seven;
console.log(sumNumbers);
console.log(sumNum(seven, eight, nine));
// ----2----

console.log("----2----");
const sumStr = ap + " " + pe + " " + df;
console.log(sumStr);
console.log(sumStrings(ap, pe, df));
// ----3----

function arrayMath(nr1, nr2, nr3, nr4, nr5) {
  return nr1[0] - nr2[1] + nr3[2] - nr4[3] + nr5[4];
}
console.log("----3----");

let liNumMath1 = arrayMath(liN1, liN1, liN1, liN1, liN1);
let liNumMath2 = arrayMath(liN2, liN2, liN2, liN2, liN2);
let liNumMath3 = arrayMath(liN3, liN3, liN3, liN3, liN3);
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
  return `${s5[4]}, ${s4[3]}, ${s3[2]}, ${s2[1]}, ${s1[0]}`;
}
const liStrRev1 = liStrRev(liStr1, liStr1, liStr1, liStr1, liStr1);
const liStrRev2 = liStrRev(liStr2, liStr2, liStr2, liStr2, liStr2);
const liStrRev3 = liStrRev(liStr3, liStr3, liStr3, liStr3, liStr3);

console.log("----4----");
// new using function
console.log(liStrRev1);
console.log(liStrRev2);
console.log(liStrRev3);
// old using individual
let index3 = liStr1.length - 1;
let revLiStr1 = liStr1[index3--] + ", ";
revLiStr1 += liStr1[index3--] + ", ";
revLiStr1 += liStr1[index3--] + ", ";
revLiStr1 += liStr1[index3--] + ", ";
revLiStr1 += liStr1[index3--];
// console.log(revLiStr1);

let index4 = liStr2.length - 1;
let revLiStr2 = liStr2[index4--] + ", ";
revLiStr2 += liStr2[index4--] + ", ";
revLiStr2 += liStr2[index4--] + ", ";
revLiStr2 += liStr2[index4--] + ", ";
revLiStr2 += liStr2[index4--];
// console.log(revLiStr2);

let index5 = liStr3.length - 1;
let revLiStr3 = liStr3[index5--] + ", ";
revLiStr3 += liStr3[index5--] + ", ";
revLiStr3 += liStr3[index5--] + ", ";
revLiStr3 += liStr3[index5--] + ", ";
revLiStr3 += liStr3[index5--];
// console.log(revLiStr3);

function name(params) {}
// Kintamuju palyginimas

console.log("-------------------------");
console.log("Kintamuju palyginimas");

function numMore(nr1, nr2) {
  return nr1 > nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}
function numLess(nr1, nr2) {
  return nr1 < nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}
function numEqual(nr1, nr2) {
  return nr1 === nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numNotEqual(nr1, nr2) {
  return nr1 !== nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numMoreEqual(nr1, nr2) {
  return nr1 >= nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

function numLessEqual(nr1, nr2) {
  return nr1 <= nr2 ? "Pomidoras" : "Bandykite kitą kartą.";
}

const nr1 = 6;
const nr2 = 5;
const txt1 = "hello";
const txt2 = "goodbye";
// ----1----

console.log("----1----");
console.log("----a.----");
console.log(numMore(nr1, nr2));
console.log("----b.----");
console.log(numLess(nr1, nr2));
console.log("----c.----");
console.log(numEqual(nr1, nr2));
console.log("----d.----");
console.log(numNotEqual(nr1, nr2));
console.log("----e.----");
console.log(numMoreEqual(nr1, nr2));
console.log("----f.----");
console.log(numLessEqual(nr1, nr2));

// ----2----

console.log("----2----");

console.log('txt1 length: ', txt1.length);
console.log('txt2 length: ', txt2.length);

console.log();
console.log("----3----");
console.log("----a----");
function strMore(s1, s2) {
  return s1.length > s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}
function strLess(s1, s2) {
  return s1.length < s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}
function strEqual(s1, s2) {
  return s1.length === s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strNotEqual(s1, s2) {
  return s1.length !== s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strMoreEqual(s1, s2) {
  return s1.length >= s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

function strLessEqual(s1, s2) {
  return s1.length <= s2.lenght ? "Pomidoras" : "Bandykite kitą kartą.";
}

console.log(strMore(txt1, txt2));
console.log("----b.----");
console.log(strLess(txt1, txt2));
console.log("----c.----");
console.log(strEqual(txt1, txt2));
console.log("----d.----");
console.log(strNotEqual(txt1, txt2));
console.log("----e.----");
console.log(strMoreEqual(txt1, txt2));
console.log("----f.----");
console.log(strLessEqual(txt1, txt2));

console.log();
console.log("----4----");


let ln1 = liN1.length;
let ls1 = liStr1.length;
console.log('Number list length: ', ln1);
console.log('String list length: ', ls1);

console.log();
function liMore(a, b) {
  return a > b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liLess(a, b) {
  return a < b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liEqual(a, b) {
  return a === b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liNotEqual(a, b) {
  return a !== b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liMoreEqual(a, b) {
  return a >= b ? "Pomidoras" : "Bandykite kitą kartą.";
}
function liLessEqual(a, b) {
  return a <= b ? "Pomidoras" : "Bandykite kitą kartą.";
}

console.log("----5----");
console.log("----a----");
console.log(liMore(ln1, ls1));
console.log("----b.----");
console.log(liLess(ln1, ls1));
console.log("----c.----");
console.log(liEqual(ln1, ls1));
console.log("----d.----");
console.log(liNotEqual(ln1, ls1));
console.log("----e.----");
console.log(liMoreEqual(ln1, ls1));
console.log("----f.----");
console.log(liLessEqual(ln1, ls1));

// Ciklo for panaudojimas
console.log();
console.log("Ciklo for panaudojimas");

console.log("----1----");
console.log();
console.log("----a----");
let sumA = 0;

for (let i = 0; i <= 0; i++) {
  sumA += i;
}
console.log('intervalas 0 ... 0');
console.log('suma - ', sumA);

console.log("----b----");
let sumB = 0;
for (let i = 0; i <= 4; i++) {
  sumB += i;
}
console.log('intervalas 0 ... 4');
console.log('suma - ', sumB);

console.log("----c----");
let sumC = 0;
for (let i = 0; i <= 100; i++) {
  sumC += i;
}
console.log('intervalas 0 ... 100');
console.log('suma - ', sumC);

console.log("----d----");
let sumD = 0;
for (let i = 0; i <= 815; i++) {
  sumD += i;
}
console.log('intervalas 574 ... 815');
console.log('suma - ', sumD);

console.log("----e----");
let sumE = 0;
for (let i = -50; i <= 50; i++) {
  sumE += i;
}
console.log('intervalas -50 ... 50');
console.log('suma - ', sumE);

console.log("----f----");
let sumF = 0;
for (let i = -70; i <= 30; i++) {
  sumF += i;
}
console.log('intervalas -70 ... 30');
console.log('suma - ', sumF);

console.log();
console.log("----2----");

for (let i = ap.length - 1; i >= 0; i--) {
  console.log(ap[i]);
}

console.clear();

function floatTxt1(n1, n2, n3,) {
  return `1) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 3 yra ${n3} vienetai.`
}
function floatTxt2(n1, n2, n3,) {
  return `2) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 5 yra ${n3} vienetai.`
}
function floatTxt3(n1, n2, n3,) {
  return `3) Skaičių intervale tarp ${n1} ir ${n2}, besidalijančių be liekanos iš 7 yra ${n3} vienetai.`
}

console.log();
console.log("----3----");
console.log();
console.log("----a----");
let div3a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 3 === 0) {
    div3a += 1
  } 
}
let div5a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 5 === 0) {
    div5a += 1
  } 
}
let div7a = 0;
for (let i = 0; i <= 11; i++) {
  if (i % 7 === 0) {
    div7a += 1
  } 
}
console.log(floatTxt1(0, 11, div3a));
console.log();
console.log(floatTxt2(0, 11, div5a));
console.log();
console.log(floatTxt3(0, 11, div7a));

console.log();
console.log("----b----");
let div3b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 3 === 0) {
    div3b += 1
  } 
}
let div5b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 5 === 0) {
    div5b += 1
  } 
}
let div7b = 0;
for (let i = 8; i <= 31; i++) {
  if (i % 7 === 0) {
    div7b += 1
  } 
}
console.log(floatTxt1(8, 31, div3b));
console.log();
console.log(floatTxt2(8, 31, div5b));
console.log();
console.log(floatTxt3(8, 31, div7b));

console.log();
console.log("----c----");
let div3c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 3 === 0) {
    div3c += 1
  } 
}
let div5c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 5 === 0) {
    div5c += 1
  } 
}
let div7c = 0;
for (let i = -18; i <= 18; i++) {
  if (i % 7 === 0) {
    div7c += 1
  } 
}
console.log(floatTxt1(-18, 18, div3c));
console.log();
console.log(floatTxt2(-18, 18, div5c));
console.log();
console.log(floatTxt3(-18, 18, div7c));