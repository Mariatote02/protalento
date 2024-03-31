// Definir productos y vendedores
const productos = [
    { nombre: "Aqua", precio: 200 },
    { nombre: "Emoción", precio: 180 },
    { nombre: "Alegría", precio: 160 },
    { nombre: "Frescura", precio: 150 }
];

const vendedores = ["Juana", "Pedro"];

// Función para solicitar la cantidad de productos vendidos por cada vendedor
function solicitarVentas() {
    let ventas = [];
    for (let vendedor of vendedores) {
        let venta = {};
        venta.vendedor = vendedor;
        venta.cantidadProductos = [];
        alert(`Ingrese las ventas de ${vendedor}:`);
        for (let producto of productos) {
            let cantidad = prompt(`Cantidad de ${producto.nombre}:`);
            while (isNaN(cantidad)) {
                cantidad = prompt("Por favor, ingrese un valor numérico:");
            }
            venta.cantidadProductos.push({ nombre: producto.nombre, cantidad: parseInt(cantidad) });
        }
        ventas.push(venta);
    }
    return ventas;
}

// Función para calcular la suma total de dinero recolectada por cada vendedor
function calcularTotalVentas(ventas) {
    let totales = [];
    for (let venta of ventas) {
        let total = 0;
        for (let item of venta.cantidadProductos) {
            total += item.cantidad * productos.find(producto => producto.nombre === item.nombre).precio;
        }
        totales.push({ vendedor: venta.vendedor, totalVentas: total });
    }
    return totales;
}

// Función para encontrar el vendedor con la mayor cantidad de ventas
function encontrarEmpleadoDelMes(totales) {
    totales.sort((a, b) => b.totalVentas - a.totalVentas);
    if (totales[0].totalVentas === totales[1].totalVentas) {
        console.log("Hubo un empate entre", totales[0].vendedor, "y", totales[1].vendedor);
    } else {
        console.log("El empleado del mes es:", totales[0].vendedor);
    }
}

// Función principal
function main() {
    let ventas = solicitarVentas();
    console.log("Cantidad de productos vendidos por cada vendedor:");
    console.log(ventas);
    let totales = calcularTotalVentas(ventas);
    console.log("Suma total de dinero recolectada por cada vendedor:");
    console.log(totales);
    encontrarEmpleadoDelMes(totales);
}

// Llamar a la función principal cuando se hace clic en el botón
document.getElementById("btnIniciar").addEventListener("click", main);
