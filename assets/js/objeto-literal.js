let personaje = {
  //al ver las llaves asociarlo con un objeto
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark V", "HulkBuster"],
  dirrecion: {
    zip: "10880, 90265",
    ubicacion: "Malibu,  California",
  },

  ultima_pelicula: "Infinity War",
};

console.log(personaje);
console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad:", personaje.edad);
console.log("Coors:", personaje.coords.lat);
console.log("Coors:", personaje.coords.lng);

console.log("No. Trajes: ", personaje.trajes);

//Quiero imprimir el traje de HulkBuster
console.log("No. Trajes: ", personaje.trajes[2]);

/*
NOTA IMPORTANE: cuando viene de forma dinamica o hardcorear el codigo asi[2]
se utiliza el calculo de la siguiente manera
*/

console.log(
  "El ultimo  traje es:",
  personaje.trajes[personaje.trajes.length - 1]
);

//Quiero saber cuantos trajes tiene Iroman
console.log("No. Trajes:", personaje.trajes.length);

const X = "vivo";
console.log("Vivo", personaje[X]);

//Mas detalles

/*Para Borrar una propiedad(atributo) de un Objeto en este caso personaje
Escribimos la palabra reservada delete
*/

delete personaje.edad;
console.log(personaje);

/*
Trabajar nuestro Objeto como si fuera un arreglo
*/

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);
console.log(personaje);

/* 
el Object.freeze congela nuestro objeto aparte de bloquear  personaje.dinero = 1000000000000; la nueva propiedad creada tampoco podre cambiar ya las existentes
*/
Object.freeze(personaje);
personaje.dinero = 1000000000000;
console.log(personaje);

const propieades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propieades, valores });
