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

/*
N.D

Reikalingas sarasas prekiu.
kiekviena preke yra parasoma pavadinimu, kaina uz vieneta ir norumu pirkti kiekiu.

reikia isspausdinti:
A) SABLONAS:
 Prekiu krepselyje yra [COUNT] prekiu

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