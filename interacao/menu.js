document.addEventListener("DOMContentLoaded", function () {
    let botao = document.querySelector(".botaoMenu");
    let menu = document.getElementById("menuLateral");
    let menuItems = menu.querySelectorAll("a"); // Seleciona todos os links dentro do menu

    // Ao clicar no botão do menu, abre ou fecha o menu
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

    // Adiciona um evento de clique para cada item do menu
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            menu.classList.remove("menu-aberto"); // Fecha o menu
        });
    });
});

