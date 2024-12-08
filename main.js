const burbujas = document.querySelectorAll('.burbujas div, .burbujas2 div');

async function burbujaClick(event) {
    const sonido = new Audio('./pop.mp3'); // Cambia a la ruta correcta de tu archivo de audio
    sonido.play();

    const burbuja = event.target;
    burbuja.style.opacity = '0';
    setTimeout(() => {
        burbuja.style.display = 'none';
    }, 200);
}

burbujas.forEach(burbuja => {
    burbuja.addEventListener('click', burbujaClick);
});
