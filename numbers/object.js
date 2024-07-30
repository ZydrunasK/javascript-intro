"use strict";  // meta errorus kai const, let.... neparasai (lengviau klaidas pamatyti)

/*
OBJECT -- objektas
key-value poru sarasas
*/

// riestiniai skliaustau
const empty = {};

const stundent1 = {
    name: 'Jonas',
    age: 25,
    isMarried: true,
    phone: 86869368,
};
const stundent2 = {
    name: 'Barbora',
    age: 34,
    isMarried: false,
    adress: 'gatve, miestas',
};
const stundent3 = {
    name: 'Aleksandras',
    age: 53,
    isMarried: true,
    adress: 'gatve, miestas',
    phone: 868745868,
};


// standartine sintakse
console.log(stundent1['name']);
console.log(stundent2['age']);
console.log(stundent3['phone']);

// supaprastinta sintakse
console.log(stundent3.name);

const cars = [
    {
        brand: 'Audi',
        model: '80',
        color: 'black',
        price: 500,
    },
    {
        brand: 'Volvo',
        model: 'S40',
        color: 'brown',
        price: 1400,
    },
    {
        brand: 'Subaru',
        model: 'impreza',
        color: 'blue',
        price: 3000,
    },
    {
        brand: 'ford',
        model: 'fiesta',
        color: 'yellow',
        price: 1000,
    },
];

// Automobilis BRAND MODEL kurio spalva yra COLOR parduodamas uz PRICE euru.
console.log('-----------');

const car1 = cars[0];
const car2 = cars[1];
console.log(car1); 

const car1sale = 'Automobilis ' + car1.brand + ' ' + car1.model + ' kurio spalva yra ' + car1.color + ' parduodamas uz ' + car1.price + ' euru.';
const car2sale = 'Automobilis ' + car2.brand + ' ' + car2.model + ' kurio spalva yra ' + car2.color + ' parduodamas uz ' + car2.price + ' euru.';
const car3sale = 'Automobilis ' + cars[2].brand + ' ' + cars[2].model + ' kurio spalva yra ' + cars[2].color + ' parduodamas uz ' + cars[2].price + ' euru.';
const car4sale = 'Automobilis ' + cars[3].brand + ' ' + cars[3].model + ' kurio spalva yra ' + cars[3].color + ' parduodamas uz ' + cars[3].price + ' euru.';


console.log(car1sale); 
console.log(car2sale); 
console.log(car3sale);
console.log(car4sale);

console.clear();
/*
N.D

Reikalingas sarasas prekiu.
kiekviena preke yra parasoma pavadinimu, kaina uz vieneta ir norumu pirkti kiekiu.

reikia isspausdinti:
A) SABLONAS:
 Prekiu krepselyje yra COUNT prekiu

B) SABLONAS:
prekiu krepselis
------------
1) pavadinimas (KAINA UZ VIENETA eur) - kiekis
2) pavadinimas (KAINA UZ VIENETA eur) - kiekis
....
N) pavadinimas (KAINA UZ VIENETA eur) - kiekis

C) sablonas:
Prekiu krepselio verte yra TOTAL KAINA eur.

*/
const line = '-------------------------';
const krep = [
    {
       preke: 'Pomidorai ',
       kaina: 1.80,
       kiekis: 3,
    },
    {
       preke: 'kumpis ',
       kaina: 3.00,
       kiekis: 1,
    },
    {
       preke: 'bulves ',
       kaina: 0.70,
       kiekis: 10,
    },
    {
       preke: 'kebabas ',
       kaina: 5.10,
       kiekis: 2,
    },
    {
       preke: 'gira ',
       kaina: 1.10,
       kiekis: 1,
    },
]
// great wall of index
let index_1 = 1;
let index = 0;
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;

// sablonas A
let kiekisKrep = (
    krep[index++].kiekis +
    krep[index++].kiekis +
    krep[index++].kiekis +
    krep[index++].kiekis +
    krep[index++].kiekis 
);
const skirtprek = 'Prekiu krepselyje yra ' + krep.length + ' prekes.';
const sablonasA = 'Prekiu krepselyje yra ' + kiekisKrep + ' prekiu.';
/*  
    indexN = 0  |  indexN_X = X  |
    sablonas B   
*/     
let preke1 = index_1++ + ') ' + krep[index1++].preke + '(' + krep[index2++].kaina + ' eur)' + ' - ' + krep[index3++].kiekis;
let preke2 = index_1++ + ') ' + krep[index1++].preke + '(' + krep[index2++].kaina + ' eur)' + ' - ' + krep[index3++].kiekis
let preke3 = index_1++ + ') ' + krep[index1++].preke + '(' + krep[index2++].kaina + ' eur)' + ' - ' + krep[index3++].kiekis
let preke4 = index_1++ + ') ' + krep[index1++].preke + '(' + krep[index2++].kaina + ' eur)' + ' - ' + krep[index3++].kiekis
let preke5 = index_1++ + ') ' + krep[index1++].preke + '(' + krep[index2++].kaina + ' eur)' + ' - ' + krep[index3++].kiekis

// sablonas C
let prekeprice = krep[index4++].kaina * krep[index5++].kiekis;
prekeprice += krep[index4++].kaina * krep[index5++].kiekis 
prekeprice += krep[index4++].kaina * krep[index5++].kiekis
prekeprice += krep[index4++].kaina * krep[index5++].kiekis
prekeprice += krep[index4++].kaina * krep[index5++].kiekis

let sablonasC = 'Prekiu krepselio verte yra ' + prekeprice + ' eur.';

// console.log(krep);
// console.log(kiekisKrep);
console.log(skirtprek);
// console.log(sablonasA);
console.log(line);
console.log(preke1);
console.log(preke2);
console.log(preke3);
console.log(preke4);
console.log(preke5);
console.log(line);
console.log(sablonasC);

console.clear();

const pc = {
    monitor: '1920x1080',
    ram: 16,
    hd: 100,
    keyboard: 'en',
    mouse: true,
    power: true,
};
console.log(pc);
console.log(pc.ram);
console.log(pc['hd']);

const param = 'power';

console.log(pc[param]);
console.clear();

// dinaminis reiksmiu priskyrimas

const zoo = {
    liutas: 2,
};

console.log(zoo);
zoo.liutas += 3;

console.log(zoo);

zoo.dramblys = 1;
console.log(zoo);

zoo.dramblys += 1;
console.log(zoo);

zoo.lape = 3;
console.log(zoo);


