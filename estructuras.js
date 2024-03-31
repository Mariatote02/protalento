// 1. Mostrar los números que son múltiplos de 5 hasta el número introducido por el usuario
let numeroUsuario1 = parseInt(prompt("Ingrese un número:"));
console.log("Los múltiplos de 5 hasta", numeroUsuario1, "son:");
for (let i = 1; i <= numeroUsuario1; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

// 2. Mostrar números del 1 al 50 y añadir "¡Lotería!" para los números introducidos por el usuario
let num1 = parseInt(prompt("Ingrese el primer número entre 1 y 50:"));
let num2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50:"));
for (let i = 1; i <= 50; i++) {
    if (i === num1 || i === num2) {
        console.log(i + " ¡Lotería!");
    } else {
        console.log(i);
    }
}

// 3. Capturar números ingresados por el usuario en un arreglo hasta que ingrese 0
let numeros = [];
let inputNum;
do {
    inputNum = parseInt(prompt("Ingrese un número (ingrese 0 para terminar):"));
    if (inputNum !== 0 && !isNaN(inputNum)) {
        numeros.push(inputNum);
    }
} while (inputNum !== 0);
console.log("Lista de números capturados:", numeros);

// 4. Capturar palabras ingresadas por el usuario y mostrar la concatenación al final
let palabras = [];
let inputPalabra;
do {
    inputPalabra = prompt("Ingrese una palabra (deje en blanco para terminar):");
    if (inputPalabra !== "") {
        palabras.push(inputPalabra);
    }
} while (inputPalabra !== "");
let concatenacion = palabras.join(" ");
console.log("Concatenación de todas las palabras capturadas:", concatenacion);

// 5. Mostrar un mensaje personalizado para cada día de la semana
let diaSemana;
do {
    diaSemana = prompt("Ingrese un día de la semana (en minúsculas, o 'domingo' para terminar):");
    switch (diaSemana) {
        case "lunes":
            alert("Es lunes. ¡Buena semana!");
            break;
        case "martes":
            alert("Es martes. Ánimo, ¡ya es martes!");
            break;
        case "miércoles":
            alert("Es miércoles. ¡Mitad de semana!");
            break;
        case "jueves":
            alert("Es jueves. ¡Casi viernes!");
            break;
        case "viernes":
            alert("Es viernes. ¡Por fin viernes!");
            break;
        case "sábado":
            alert("Es sábado. ¡Disfruta el fin de semana!");
            break;
        case "domingo":
            alert("Es domingo. Ve a descansar.");
            break;
        default:
            alert("Día no válido.");
    }
} while (diaSemana !== "domingo");
