const player = document.querySelector('.player')
const cano = document.querySelector('.cano')



const pulo = () => {
    player.classList.add('pulo')
    setTimeout(() => {
    
        player.classList.remove('pulo')

    }, 500);
}

const loop = setInterval(() => {

const posicaocano = cano.offsetLeft;
const playerposicao = +window.getComputedStyle(player).bottom.replace('px','');

if (posicaocano <= 100 && posicaocano > 0 && playerposicao < 80) {
    cano.style.animation = 'none';
    cano.style.left = `${posicaocano}px`;

    player.style.animation = 'none';
    player.style.bottom = `${posicaocano}px`;

    player.src='./imgs/morreu.png'
    player.style.width= '80px'
};

},10);
const reset = () => {
    pulo()
    console.log(reset)
}


document.addEventListener('keydown', 'onclick', pulo, reset)
