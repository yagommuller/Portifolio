const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisprojetos();
    esconderBotao();


});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remove");
}

function mostrarMaisprojetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

