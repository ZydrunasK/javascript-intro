/* 
FOR - for'as  standartinis (tevinis) ciklas (pasikartojanti seka)
*/

console.clear();

const words = ['a', 'b', 'c', 'w', 'r'];

for (let i=0; i < words.length; i++) {
    console.log((i + 1) + ') ZODIS...' + words[i]);
}

console.clear();

function arTesti (index) {
    if (index > 25) {
        return false;
    }
    return true;
}

for (let j = 20; arTesti(j); j++) {
    console.log(j);
}
console.clear();

// how to add up every number in a cycle

let sumCycle = 0; // this will become the sum of the cycle (0 because 0 + n1 + n2...(0 + first number in cycle and so on))

for (let i = 0; i <= 10; i++) { // i = 0 (starting point) | i <= 10 (end point(10 included)) | i++ (numbers increase by 1(0, 1, 2...)) 
    sumCycle += i;              // sumStart(starting from 0 sum of cycle) +=(adds to itself) i(each number the cycle run)
}
console.log(sumCycle); // we log the sum out of the cycle bounds{} so we only see the final result
