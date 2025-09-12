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