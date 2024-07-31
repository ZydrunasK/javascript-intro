/*
STRING - tekstas, simboliu grandinele

string iniciavimo simboliai:
    - ' (vienguba kabute)
    - " (dviguba kabute)
    - ` (backtick)

Operatioriai:
+ sujungia stringus
\ (escape) eskeipiname - funkcini simboli paveriame i spausdintina

Interpretavimas:
- tuscias string - false
- netuscias string - true

*/

const single = 'zodziai cia';
console.log(single);

const double = "zodziai cia";
console.log(double);

// vienguba (') kabute.
const kabute1 = "vienguba (') kabute.";

// dviguba (") kabute.
const kabute2 = 'dviguba (") kabute.';

console.log(kabute1);
console.log(kabute2);


const name = 'Chuck';
const surname = 'Norris';
const fullname = name + ' ' + surname;
console.log(name);
console.log(surname);
console.log(fullname);

const chuck = 'My name is not ' + fullname + ' ' + ', but I like it!';
console.log(chuck);

// vienguba (') kabute ir dviguba (") kabute.
const kabute12 = "vienguba (') kabute " + 'ir dviguba (") kabute'
console.log(kabute12);

const kabute12_1 = 'vienguba (\') kabute ir dviguba (\") kabute.';
const kabute12_2 = "vienguba (\') kabute ir dviguba (\") kabute.";

console.log(kabute12_1);
console.log(kabute12_2);

// Back-slash (\) simbolis.
const backSlash1 = 'Back-slash (\\) simbolis.';
const backSlash2 = "Back-slash (\\) simbolis.";

console.log(backSlash1);
console.log(backSlash2);

console.clear();

const hi = 'Labas';
const hiSize = hi.length;

// Teksto "<TEKSTAS>" ilgis yra <ILGIS> simboliai


const textSize1 = 'Teksto "' + hi + '" ilgis yra ' + hi.length + ' simboliai';
const textSize2 = 'Teksto "' + hi + '" ilgis yra ' + hiSize + ' simboliai';


console.log(textSize1);
console.log(textSize2);
console.log('----------------------');

let textSize3 = '';
console.log(1, textSize3);

textSize3 = textSize3 + 'Teksto "';
console.log(2, textSize3);

textSize3 = textSize3 + hi;
console.log(3, textSize3);

textSize3 = textSize3 + '" ilgis';
console.log(4, textSize3);

textSize3 = textSize3 + ' yra ';
console.log(5, textSize3);

textSize3 = textSize3 + hiSize;
console.log(6, textSize3);

textSize3 = textSize3 + ' simboliai';
console.log(7, textSize3);

console.clear();

const pomidoras = 'Pomidoras';
console.log(pomidoras);


const Symbol1 = pomidoras[0];
console.log(Symbol1);

const Symbol2 = pomidoras[1];
console.log(Symbol2);

const Symbol3 = pomidoras[2];
console.log(Symbol3);

console.log(pomidoras[99]);
console.log(pomidoras[-99]);
console.log(pomidoras[3.1516]);
console.log(pomidoras[-3.1516]);

const agurkas = 'Zalias agurkas'
const agurkasFirst = agurkas[0]

console.log(agurkasFirst);

const agurkasLast = agurkas[agurkas.length -1];
console.log(agurkasLast);

const text = 'zsdgawergasp';
const lastSymbol = text[--text.length];

console.log(lastSymbol);

console.clear();

const personName = 'Vardas'
const personSurName = 'Pavarde'

// V.P.
console.clear();

