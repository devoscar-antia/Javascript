let nombre = "Peter Parker";
console.log(nombre);

nombre = "Ben Parker";
console.log(nombre);

nombre = "Tia May";
nombre = `Tia May`;

console.log(typeof nombre);
nombre = 12;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.001;
console.log(typeof edad);

let superPoderdeSpiderman;
console.log(typeof superPoderdeSpiderman); // undefined

let soyNull = null;
console.log(typeof soyNull); // object (this is a known JavaScript quirk)

let symbol1 = Symbol("a");
let symbol2 = Symbol("a");
console.log(typeof symbol1); // symbol
console.log(typeof symbol2); // symbol

console.log(symbol1 === symbol2); // false, because symbols are unique
