document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".icon-filter"); // Seleciona todos os botões
    const sempreAtivo = document.getElementById("sempre-ativo");

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

    const grid = document.getElementById("grid");
    const botaoProxima = document.getElementById("botao-proxima");
    const botaoAnterior = document.getElementById("botao-anterior");
    let indexAtual = 0; // Indice da página atual
    let itensPorPagina = 14; // Valor inicial de músicas por página

    // Função para atualizar o número de músicas exibidas com base no tamanho da tela
    function atualizarItensPorPagina() {
        if (window.innerWidth <= 768) {  // Para telas menores que 768px (mobile)
            itensPorPagina = 4;
        } else {  // Para telas maiores (desktop, tablet, etc.)
            itensPorPagina = 14;
        }
    }

    function atualizarVisibilidade() {
        const musicas = document.querySelectorAll(".musica-card");
        const totalMusicas = musicas.length;

        // Esconde todas as músicas
        musicas.forEach((musica, index) => {
            musica.style.display = "none";
        });

        // Exibe as músicas da página atual (de acordo com a quantidade por página)
        for (let i = indexAtual * itensPorPagina; i < (indexAtual + 1) * itensPorPagina && i < totalMusicas; i++) {
            musicas[i].style.display = "flex";
        }
    }

    botaoProxima.addEventListener("click", function () {
        const musicas = document.querySelectorAll(".musica-card");
        if ((indexAtual + 1) * itensPorPagina < musicas.length) {
            indexAtual++;
            atualizarVisibilidade();
        }
    });

    botaoAnterior.addEventListener("click", function () {
        if (indexAtual > 0) {
            indexAtual--;
            atualizarVisibilidade();
        }
    });

    // Adiciona event listener para ajustar o número de itens conforme a largura da tela
    window.addEventListener('resize', function () {
        atualizarItensPorPagina();
        atualizarVisibilidade();
    });

    function carregarMusicas() {
        const script = document.createElement("script");
        script.src = "banco/musicas.js"; // Carrega o arquivo de músicas
        script.onload = () => {
            if (typeof musicas !== "undefined") {
                musicas.forEach(musica => {
                    const div = document.createElement("div");
                    div.classList.add("musica-card");

                    const img = document.createElement("img");
                    img.src = musica.foto;  // Foto da música
                    div.appendChild(img);

                    const link = document.createElement("a");
                    link.href = musica.link;
                    link.textContent = musica.nome;
                    link.href = "tracks.html"; // Abre em nova aba

                    const artista = document.createElement("p");
                    artista.textContent = musica.autor;
                    artista.style.color = "white";
                    artista.style.fontSize = "0.9em"; // Autor da música

                    div.appendChild(link);
                    div.appendChild(artista);
                    grid.appendChild(div);
                });
                atualizarItensPorPagina(); // Atualiza o número de itens ao carregar as músicas
                atualizarVisibilidade();
            } else {
                console.error("O arquivo de músicas não carregou corretamente.");
            }
        };
        script.onerror = () => console.error("Erro ao carregar o arquivo de músicas.");
        document.body.appendChild(script);
    }

    carregarMusicas();
});