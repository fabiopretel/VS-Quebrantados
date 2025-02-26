document.addEventListener("DOMContentLoaded", function () {
    let botao = document.querySelector(".botaoMenu");
    let menu = document.getElementById("menuLateral");

    botao.addEventListener("click", function (event) {
        event.stopPropagation(); // Impede que o clique no botão feche o menu imediatamente
        menu.classList.toggle("menu-aberto");
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !botao.contains(event.target)) {
            menu.classList.remove("menu-aberto");
        }
    });
});

