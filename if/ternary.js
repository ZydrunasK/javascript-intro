/* 
UNARY - vieno operatoriaus
    const x = 5;
BINARY - dvieju operatoriu
    const y = x + 7;
TERNARY - triju operatoriu
    const gg = kalusimas ? pozityvas : negatyvas;
*/


const age = 17;
const ageLimit = 18;
const msgOk = 'didelis';
const msgErr = 'mazas';

let msg = '';


if (age >= ageLimit) {
    msg = 'Valio';
} else {
    msg = 'neskubek';
}

console.log('Message:', msg);

const msg2 = age >= ageLimit 
? msgOk 
: msgErr;

console.log('Message:', msg2);

console.clear();

 const a = 1 > 2 ?  3 : 4;
 console.log(a);
 const b = 1 < 2 ?  3 : 4;
 console.log(b);
 const c = 1 ? 3 : 4;
 console.log(c);
 const d = 0 ? 3 : 4;
 console.log(d);
 const f = 0 ? 1 : 2 ? 3 : 4;
 console.log(f);
 const g = 0 ? 3 : 2 ? 1 : 0;
 console.log(g);
 const h = 1 ? 2 ? 3 : 4 : 5;
 console.log(h);
 const i = 0 ? 1 ? 2 : 3 : 4 ? 5 : 6;
 console.log(i);


