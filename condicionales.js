// 1. Preguntar si el usuario es bello/a
let respuesta1 = prompt("¿Eres bellisimo/a?");
if (respuesta1 == "sí") {
   console.log("Ciertamente");
} else if (respuesta1 == "no") {
    console.log("No te creo");
}

// 2. Determinar si un número es divisible entre 2
let numero = parseInt(prompt("Ingrese un número:"));
if (numero % 2 == 0) {
    console.log(numero + " es divisible entre 2");
} else {
    console.log(numero + " no es divisible entre 2");
}

// 3. Determinar si un número es par o no
let numeroPar = parseInt(prompt("Ingrese un número:"));
if (numeroPar % 2 == 0) {
    alert(numeroPar + " es un número par");
} else {
    alert(numeroPar + " no es un número par");
}

// 4. Determinar si el número de cliente es ganador de un premio
let numeroCliente = parseInt(prompt("Ingrese su número de cliente:"));
if (numeroCliente == 1000) {
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos, sigue participando");
}

// 5. Determinar cuál de dos números es menor
let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));
if (num1 < num2) {
    console.log(num1 + " es menor que " + num2);
} else {
    console.log(num2 + " es menor que " + num1);
}

// 6. Determinar cuál de tres números es el mayor
let num3 = parseInt(prompt("Ingrese el primer número:"));
let num4 = parseInt(prompt("Ingrese el segundo número:"));
let num5 = parseInt(prompt("Ingrese el tercer número:"));
if (num3 >= num4 && num3 >= num5) {
    console.log(num3 + " es el número mayor");
} else if (num4 >= num5) {
    console.log(num4 + " es el número mayor");
} else {
    console.log(num5 + " es el número mayor");
}

// 7. Determinar qué día de la semana es
let diaSemana = prompt("Ingrese un día de la semana:").toLowerCase();
switch (diaSemana) {
    case "lunes":
        console.log("Es lunes");
        break;
    case "viernes":
        console.log("Es viernes");
        break;
    case "sábado":
    case "domingo":
        console.log("Es sábado o domingo");
        break;
    default:
        console.log("Es otro día de la semana");
}

// 8. Determinar la calificación y mostrar el resultado
let calificacion = parseInt(prompt("Ingrese su calificación (entre 1 y 10):"));
if (calificacion < 1 || calificacion > 10) {
    console.log("Error: La calificación debe estar entre 1 y 10");
} else if (calificacion < 6) {
    console.log("Reprobado");
} else if (calificacion <= 8) {
    console.log("Regular");
} else if (calificacion === 9) {
    console.log("Bien");
} else {
    console.log("Excelente");
}

// 9. Calcular el precio del helado con topping
let precioBase = 50;
let topping = prompt("Ingrese el topping deseado (oreo, KitKat, brownie):").toLowerCase();
switch (topping) {
    case "oreo":
        precioBase += 10;
        break;
    case "kitkat":
        precioBase += 15;
        break;
    case "brownie":
        precioBase += 20;
        break;
    default:
        console.log("No tenemos este topping, lo sentimos.");
}
console.log("El precio del helado es: " + precioBase + " MXN");

// 10. Calcular el costo mensual y total del curso elegido
let curso = prompt("Ingrese el curso deseado (Course, Carrera, Master):").toLowerCase();
let precioMensual;
let duracion;
switch (curso) {
    case "course":
        precioMensual = 4999;
        duracion = 2;
        break;
    case "carrera":
        precioMensual = 3999;
        duracion = 6;
        break;
    case "master":
        precioMensual = 2999;
        duracion = 12;
        break;
    default:
        console.log("Curso no válido");
}
let beca = prompt("¿Cuenta con alguna beca? (Facebook, Google, Jesua)").toLowerCase();
let descuento = 0;
switch (beca) {
    case "facebook":
        descuento = 0.2;
        break;
    case "google":
        descuento = 0.15;
        break;
    case "jesua":
        descuento = 0.5;
        break;
}
let precioFinal = precioMensual * (1 - descuento);
let precioTotal = precioFinal * duracion;
console.log("El precio mensual con descuento es: " + precioFinal + " MXN");
console.log("El precio total del curso es: " + precioTotal + " MXN");

// 11. Calcular el total a pagar por el viaje en vehículo
let tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):").toLowerCase();
let precioKilometro;
switch (tipoVehiculo) {
    case "coche":
        precioKilometro = 0.20;
        break;
    case "moto":
        precioKilometro = 0.10;
        break;
    case "autobús":
        precioKilometro = 0.50;
        break;
    default:
        console.log("Tipo de vehículo no válido");
}
let kmsRecorridos = parseFloat(prompt("Ingrese los kilómetros recorridos:"));
let litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));
let costoTotal;
if (litrosConsumidos <= 100) {
    costoTotal = (precioKilometro * kmsRecorridos) + 5;
} else {
    costoTotal = (precioKilometro * kmsRecorridos) + 10;
}
console.log("El total a pagar es: " + costoTotal + " MXN");