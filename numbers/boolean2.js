// -----------------------------------------------------
/*  permutations with repetition (n^r)
    2 - choices(n) | 4 - positions(r) 
    | 2 | 2 | 2 | 2 |           2 - (true/false)
    amount of premutations
    2 x 2 x 2 x 2 = 2^4 = 16

    operatoriu premutacijos
    n-2 r-3
    p=2^3
*/
let n = 2;
let r = 4;
let r_op = 3;
let p = Math.pow(n, r);
let p_op = Math.pow(n, r_op);
console.log(p_op);
console.log(p);
console.log(p * p_op, 'Possible combinations');
// net nezinau ar as cia an tiek nesamone suskaiciavau ar as tuoj is proto iseisiu viska rasydams
console.log('-------------------------------------------');
console.log('&& && &&');
console.log('---------');
console.log(true && true && true && true);
console.log('---------');

console.log(false && true && true && true);
console.log(true && false && true && true);
console.log(true && true && false && true);
console.log(true && true && true && false);

console.log('---------');

console.log(false && false && true && true);
console.log(true && false && false && true);
console.log(true && true && false && false);
console.log(false && true && false && true);
console.log(true && false && true && false);
console.log(false && true && true && false);

console.log('---------');

console.log(false && false && false && true);
console.log(true && false && false && false);
console.log(false && true && false && false);
console.log(false && false && true && false);
console.log('---------');
console.log(false && false && false && false);

console.clear();

console.log('|| || ||');
console.log('---------');
console.log(true || true|| true || true);
console.log('---------');

console.log(false || true || true || true);
console.log(true || false || true || true);
console.log(true || true || false || true);
console.log(true || true || true || false);

console.log('---------');

console.log(false || false || true || true);
console.log(true || false || false || true);
console.log(true || true || false || false);
console.log(false || true || false || true);
console.log(true || false || true || false);
console.log(false || true || true || false);

console.log('---------');

console.log(false || false || false || true);
console.log(true || false || false || false);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log('---------');
console.log(false || false || false || false);

console.clear();

console.log('|| && &&');
console.log('---------');
console.log(true || true && true && true);
console.log('---------');
console.log(false || true && true && true);
console.log(true || false && true && true);
console.log(true || true && false && true);
console.log(true || true && true && false);

console.log('---------');

console.log(false || false && true && true); 
console.log(true || false && false && true); 
console.log(true || true && false && false); 
console.log(false || true && false && true); 
console.log(true || false && true && false); 
console.log(false || true && true && false); 

console.log('---------');

console.log(false || false && false && true);
console.log(true || false && false && false);
console.log(false || true && false && false);
console.log(false || false && true && false);
console.log('---------');
console.log(false || false && false && false);

console.clear();

console.log('&& || &&');
console.log('---------');
console.log(true && true || true && true);
console.log('---------');

console.log(false && true || true && true);
console.log(true && false || true && true);
console.log(true && true || false && true);
console.log(true && true || true && false);

console.log('---------');

console.log(false && false || true && true);
console.log(true && false || false && true);
console.log(true && true || false && false);
console.log(false && true || false && true);
console.log(true && false || true && false);
console.log(false && true || true && false);

console.log('---------');

console.log(false && false || false && true);
console.log(true && false || false && false);
console.log(false && true || false && false);
console.log(false && false || true && false);
console.log('---------');
console.log(false && false || false && false);

console.clear();

console.log('&& && ||');
console.log('---------');
console.log(true && true && true || true);
console.log('---------');

console.log(false && true && true || true);
console.log(true && false && true || true);
console.log(true && true && false || true);
console.log(true && true && true || false);

console.log('---------');

console.log(false && false && true || true);
console.log(true && false && false || true);
console.log(true && true && false || false);
console.log(false && true && false || true);
console.log(true && false && true || false);
console.log(false && true && true || false);

console.log('---------');

console.log(false && false && false || true);
console.log(true && false && false || false);
console.log(false && true && false || false);
console.log(false && false && true || false);
console.log('---------');
console.log(false && false && false || false);

console.clear();

console.log('|| || &&');
console.log('---------');
console.log(true || true|| true && true);
console.log('---------');

console.log(false || true || true && true);
console.log(true || false || true && true);
console.log(true || true || false && true);
console.log(true || true || true && false);

console.log('---------');

console.log(false || false || true && true);
console.log(true || false || false && true);
console.log(true || true || false && false);
console.log(false || true || false && true);
console.log(true || false || true && false);
console.log(false || true || true && false);

console.log('---------');

console.log(false || false || false && true);
console.log(true || false || false && false);
console.log(false || true || false && false);
console.log(false || false || true && false);
console.log('---------');
console.log(false || false || false && false);

console.clear();

console.log('|| && ||');
console.log('---------');
console.log(true || true && true || true);
console.log('---------');

console.log(false || true && true || true);
console.log(true || false && true || true);
console.log(true || true && false || true);
console.log(true || true && true || false);

console.log('---------');

console.log(false || false && true || true);
console.log(true || false && false || true);
console.log(true || true && false || false);
console.log(false || true && false || true);
console.log(true || false && true || false);
console.log(false || true && true || false);

console.log('---------');

console.log(false || false && false || true);
console.log(true || false && false || false);
console.log(false || true && false || false);
console.log(false || false && true || false);
console.log('---------');

console.log(false || false && false || false);

console.clear();

console.log('|| || ||');
console.log('---------');
console.log(true || true || true || true);
console.log('---------');

console.log(false || true || true || true);
console.log(true || false || true || true);
console.log(true || true || false || true);
console.log(true || true || true || false);

console.log('---------');

console.log(false || false || true || true);
console.log(true || false || false || true);
console.log(true || true || false || false);
console.log(false || true || false || true);
console.log(true || false || true || false);
console.log(false || true || true || false);

console.log('---------');

console.log(false || false || false || true);
console.log(true || false || false || false);
console.log(false || true || false || false);
console.log(false || false || true || false);
console.log('---------');
console.log(false || false || false || false);
