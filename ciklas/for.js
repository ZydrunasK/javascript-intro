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

for (j = 20;arTesti(j); j++) {
        console.log(j);   
}
