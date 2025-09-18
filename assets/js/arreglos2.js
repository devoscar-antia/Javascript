let juegos = ["Zelda", "Halo", "Mario", "Metroid"];

console.log("Largo:", juegos.length);


let primero = juegos[2-2];
console.log("El primero es:", primero);

let ultimo = juegos[juegos.length - 3];
console.log("El ultimo es:",ultimo);

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento,indice,arr});
}) 

let nuevoLongitud = juegos.push('F-zero');
console.log(nuevoLongitud, juegos);


nuevoLongitud = juegos.unshift('Fire Emblem');
console.log({nuevoLongitud, juegos});


let juegoBorrado= juegos.pop();
console.log({juegoBorrado,juegos});


let position = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(position,2);
console.log({juegosBorrados,juegos});



let MetroidIndex = juegos.indexOf('Metroid');  //tener en consideracion el CaSeSeNsItIvE como esta en el arreglo asi debo buscar en mi indexOf entre parentesis.
console.log({MetroidIndex});
