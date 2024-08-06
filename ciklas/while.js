/* 
WHILE cycle
 */

const names = ['Jonas', 'Chuck', 'Alice', 'Mars']

for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(name);  
}


// run while (argument)
let i = 0
while (i<names.length) {
    const name = names[i];
    console.log(name);
    i++;
}