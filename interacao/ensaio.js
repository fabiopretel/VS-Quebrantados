document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".icon-filter"); // Seleciona todos os botões
    const sempreAtivo = document.getElementById("sempre-ativo")

    // Garante que o botão sempre-ativo comece ativo
    sempreAtivo.classList.add("ativo");

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            // Remove a classe 'ativo' de todos os botões
            botoes.forEach(b => b.classList.remove("ativo"));

            // Adiciona a classe 'ativo' ao botão clicado
            this.classList.add("ativo");
        });
    });
});