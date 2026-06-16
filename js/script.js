// Menu responsivo simples do projeto
const botaoMenu = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
        const menuEstaAberto = menu.classList.toggle('aberto');
        botaoMenu.setAttribute('aria-expanded', menuEstaAberto ? 'true' : 'false');
    });
}
