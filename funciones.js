const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');
const rojo = document.getElementById('rojo');

let intervalo;

const cambiaColor = () => {
  verde.style.display = 'none';
  amarillo.style.display = 'block';

  setTimeout(() => {
    amarillo.style.display = 'none';
    rojo.style.display = 'block';

    setTimeout(() => {
      rojo.style.display = 'none';
      verde.style.display = 'block';
    }, 3000);
  }, 2000);
};

const iniciaCambioDeColor = () => {
  intervalo = setInterval(cambiaColor, 5000);
};

const detente = () => {
  clearInterval(intervalo);
  console.log('Listo!');
};

iniciaCambioDeColor();

setTimeout(detente, 15000);