/* 
... - "spread" operatorius
... - "rest" operatorius
*/

const a = [1, 2];
const b = a;
console.log(a);
console.log(b);


a[0] = 111;
console.log('a', a);
console.log('b', b);

console.clear();


//spread
const m1 = [12, 21];
const m2 = [...m1];

console.log(m1);
console.log(m2);

m1[1] = 212;
m2[1] = 0;
console.log(m1);
console.log(m2);


