const burbujas = document.querySelectorAll('.burbujas div, .burbujas2 div')



function burbujaClick(event){
    const sonido = document.getElementById('popSound')
    sonido.play();

    const burbuja = event.target;
    burbuja.style.opacity = '0'
    setTimeout(() => {
        burbuja.style.display = 'none';

    }, 200)

}

burbujas.forEach(burbuja => {
    burbuja.addEventListener('click',burbujaClick)
});
