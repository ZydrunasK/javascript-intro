const n1 = 7;
const n2 = 5;

// regular function (function declaration)
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// anonimous function
const diff = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);

// arrow function
const multi = (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow function
// if logic block contains only 1 precedure then you dont need to type {return}

const div = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

// arrow function
// if parameter(argument) block contains only 1 argument then you dont need to type ()


const sqr = a => a * a;
console.log(`${n1} * ${n1} = ${sqr(n1)}`);

console.log('labas \t', 'vakaras');

