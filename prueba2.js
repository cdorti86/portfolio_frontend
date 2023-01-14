var i = 1;
var j = i;
if ( i == 1) {
    var i = 2;
}

function x() {
    i = 3;
    i+=3;
}
x();
console.log(i);

function x() {
    j+=3;
}
x();
console.log("Valor de j?? " + j);
console.log(i==j);
// ver fechas (creo que es Typescript)
let date: Date = new Date();
date.setDate(13)
date.setMonth(11)
date.setFullYear(2021)

console.log("Año = " + date.getFulYear())
console.log("Fecha = " + date.getMonth())
console.log("Mes = " + date.getMonth())
console.log("Dia = " + date.getDay())

// boton encendido/apagado (creo que es Typescript)
var x = "0";
    switch (x) {
        case "0":
            console.log("Off");
            break;
        case "1":
            console.log("On")
            break;
        default:
            console.log("Default")
    }

    // crear objetos en Typescript
    let planet = new Object(); // esta es una alternativa
    let planet = {}; //asi se hace en Javascript

    interface Planet{   // esto lo hago para crearle los parametros que van a tener
        name: string;
        galaxy: string;
        numberOfMoons: number;
        weight: number;
    }

    //Object with properties
    let planet: Planet = {
        name:"Earth",
        galaxy: "Milky Way",
        numberOfMoons: 1,
        weight: 100000
    };

    console.log("Planet Name :-" +planet.name);
    console.log("Planet Galaxy :-" +planet.galaxy);
    console.log("Planet Number of Moons :-" +planet.numberOfMoons);
    console.log("Planet Weight :-" +planet.weight);

