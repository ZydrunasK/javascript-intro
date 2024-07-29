let a = 1;
let b = 2;

a = 3;

const c = a + b;

let ca = c * a;
let cb = c * b;




console.log('a =', a);
console.log('b =', b);
console.log('ca =', 'c * a =', ca);
console.log('cb =', 'c * b =', cb);
console.log('ca < cb: ', Boolean (ca < cb), '(', ca, '<', cb, ')');
console.log('ca > cb: ', Boolean (ca > cb), '(', ca, '>', cb, ')');
console.log('ca = cb: ', Boolean (ca == cb), '(', ca, "=", cb, ')');

console.clear();
// simple math

let q = 2;
let w = 5;
let e = 8;

const r = (q * w)/ e;

console.log('r = (',q,'*',w,') /',e);
console.log(r);

console.log('----------------------------');

console.log(2 || 4);
console.log(4 || 2);
console.log(5 || 7);
console.log(8 && 9);
console.log(4 && 8);
console.log(2 && 1);
console.log(2 && 1);
console.log(1 && 2 || 3);
console.log(1 || 2 && 3);

console.clear();

const stuff = 2 + 5 * (4*8) - 42;
const stuff2 = 46+59*748-123;
const stuff3 = (48*(48*5))/(45+95);


console.log(stuff);
console.log(stuff2);
console.log(stuff3);




