/* 
    FOR-OF cycle
*/

for (let i = 0; i < 5; i++) {
    console.log(i);
}
const names = ['Jonas', 'Chuck', 'Alice', 'Mars']

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(`Hello my name is ${name}`);   
}

const vegies = ['potato', 'tomato', 'onion', 'carrot', 'cabbage']

for (const vegie of vegies) {
    console.log(`I like ${vegie}s`);
}