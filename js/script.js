// JavaScript simples do projeto
// Funções usadas: menu hamburger, página ativa, botão voltar ao topo e aviso do formulário.

document.addEventListener('DOMContentLoaded', function () {
    const botaoMenu = document.querySelector('.menu-toggle');
    const menuPrincipal = document.querySelector('#menu-principal');

    // 1) Menu hamburger abre e fecha no celular
    if (botaoMenu && menuPrincipal) {
        botaoMenu.addEventListener('click', function () {
            const abriu = menuPrincipal.classList.toggle('aberto');
            botaoMenu.setAttribute('aria-expanded', abriu ? 'true' : 'false');
            botaoMenu.textContent = abriu ? '✕ Fechar menu' : '☰ Menu';
        });

        // Fecha o menu depois que o usuário clica em um link no celular
        const linksMenu = menuPrincipal.querySelectorAll('a');
        linksMenu.forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth <= 700) {
                    menuPrincipal.classList.remove('aberto');
                    botaoMenu.setAttribute('aria-expanded', 'false');
                    botaoMenu.textContent = '☰ Menu';
                }
            });
        });
    }

    // 2) Marca automaticamente o link da página atual no menu
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');

    links.forEach(function (link) {
        const destino = link.getAttribute('href');
        if (destino === paginaAtual) {
            link.classList.add('ativo');
        }
    });

    // 3) Botão voltar ao topo criado via JavaScript
    const botaoTopo = document.createElement('button');
    botaoTopo.textContent = '↑ Topo';
    botaoTopo.className = 'botao-topo';
    botaoTopo.setAttribute('type', 'button');
    botaoTopo.setAttribute('aria-label', 'Voltar ao topo da página');
    document.body.appendChild(botaoTopo);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 250) {
            botaoTopo.classList.add('mostrar');
        } else {
            botaoTopo.classList.remove('mostrar');
        }
    });

    botaoTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 4) Interação simples no formulário de contato, sem enviar dados reais
    const formulario = document.querySelector('form');
    if (formulario) {
        const aviso = document.createElement('p');
        aviso.className = 'aviso-formulario';
        aviso.textContent = 'Preencha os campos e clique em enviar para testar a interação do formulário.';
        formulario.appendChild(aviso);

        formulario.addEventListener('submit', function (evento) {
            evento.preventDefault();
            aviso.textContent = 'Mensagem registrada apenas como teste do projeto acadêmico.';
        });
    }
});
