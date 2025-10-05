// Creo el array de objetos, con nombre y el importe

let organizaciones = [
    { nombre: "Amigos de la tierra", importe: 5 },
    { nombre: "Cáritas", importe: 7 },
    { nombre: "Cruz roja", importe: 1 },
    { nombre: "Green peace", importe: 8 },
    { nombre: "Manos unidas", importe: 10 },
    { nombre: "Survival", importe: 2 },
    { nombre: "Techo", importe: 15 },
    { nombre: "Teleton", importe: 11 },
    { nombre: "Unicef", importe: 23 },
    { nombre: "WWF", importe: 25 }
];

// Declaramos las variables

let donaciones = {};
let totalDonado = 0;
let totalAportaciones = 0;
let donacionMedia = 0;
let tramiteFinalizado = false;