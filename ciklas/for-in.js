/* 
    FOR-IN cycle
*/

const person = {
    name: 'Aeris',
    age: 4300,
    isMarried: true,
    Phone: 'Look east when the sun first shines and chant the sacred words',
    address: {
        city: 'olimpus',
        stree: 'cloud',
        number: 7
    },
    marks: [10, 2, 8, 4, 6]

}
//1.
const keys = Object.keys(person)
for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    console.log(i, key, person[key]);
}
console.log();

//2.
const keys2 = Object.keys(person)
for (const key of keys2) {
    console.log(key, person[key]);
}
console.log();

//3.

for (const key in person) {
    console.log(key, person[key]);
}

console.clear();

const abc = {
    a: 'tree',
    b: 'sea',
    c: 'tea',
    d: 'trump',
    e: 'stump',
}

for (const key in abc) {
    console.log(key, abc[key]);
}
