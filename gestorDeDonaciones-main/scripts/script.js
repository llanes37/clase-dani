// Array de organizaciones
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

// Variables para donaciones
let donaciones = {};
let totalDonado = 0;
let totalAportaciones = 0;

// Seleccionar imágenes y añadir eventos
let articulos = document.querySelectorAll("#container article img");
for (let i = 0; i < articulos.length; i++) {
    articulos[i].onclick = function () {
        let nombre = organizaciones[i].nombre;
        let importe = organizaciones[i].importe;
        if (donaciones[nombre]) {
            donaciones[nombre]++;
        } else {
            donaciones[nombre] = 1;
        }
        totalDonado += importe;
        totalAportaciones++;
    };
}

// Botón para finalizar trámite
document.getElementById("finalizar").onclick = function () {
    let nombres = Object.keys(donaciones).sort().reverse();
    let resultado = "";
    for (let i = 0; i < nombres.length; i++) {
        resultado += nombres[i] + " ---- " + donaciones[nombres[i]] + " aportacion";
        if (donaciones[nombres[i]] > 1) resultado += "es";
        resultado += "<br>";
    }
    resultado += "<br>Donación final: " + totalDonado + "€<br>";
    resultado += "Donación media: " + (totalAportaciones ? (totalDonado / totalAportaciones).toFixed(2) : "0") + " €/aportación";
    document.getElementById("resultado").innerHTML = resultado;

    // Reiniciar variables para nueva serie de donaciones
    donaciones = {};
    totalDonado = 0;
    totalAportaciones = 0;
};