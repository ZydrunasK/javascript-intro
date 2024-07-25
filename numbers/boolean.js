/*
BOOLEAN - logine reiksme
true / false

Interpretavimas:
true -> 1
false -> 0

Operatoriai
&& - AND (ir) turi pirmenybe pries ||
|| - OR (arba)


*/

const arSvieciaSaule = true
const arNaktis = false

console.log(arSvieciaSaule);
console.log(arNaktis);

const a = true + true;
console.log(a);

const b = false - false;
console.log(b);

const c = true + false;
console.log(c);

console.clear();

console.log(true);
console.log('--------------------');
console.log(true);
console.log(true && true, true * true);
console.log(true && false, true * false);
console.log(false && true, false * true);
console.log(false && false, false * false);
console.log('--------------------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log('--------------------');
console.log(true && true && true);
console.log(true && true && false);
console.log(true && false && true );
console.log(false && true && false);
console.log('--------------------');
console.log(true || true && true);
console.log(true || true && false);
console.log(true || false && true );
console.log(false || true && false);
console.log('--------------------');
console.log(true && true || true);
console.log(true && true || false);
console.log(true && false || true );
console.log(false && true || false);
console.log('--------------------');

