function normalizarTexto(texto) {
    return texto
        .toLowerCase() // Converte para minúsculas
        .normalize("NFD") // Remove acentos
        .replace(/[\u0300-\u036f]/g, "") // Remove caracteres diacríticos
        .replace(/\s+/g, "-"); // Substitui espaços por traços
}

function buscarMusica(){
    var pesquisa = document.getElementById('pesquisa').value.trim();

    if (!pesquisa) {
        alert('Digite o nome da música');
        return;
    }

    var chaveNormalizada = normalizarTexto(pesquisa);

    var resultadosContainer = document.getElementById('resultados');
    var iframe = document.getElementById('videoFrame');

    if (musicas.hasOwnProperty(chaveNormalizada)) {
        var videoID = musicas[chaveNormalizada];

        // Atualiza o iframe com o link embed do vídeo
        iframe.src = `https://www.youtube.com/embed/${videoID}`;

        // Limpa qualquer mensagem anterior
        resultadosContainer.innerHTML = "";
        resultadosContainer.appendChild(iframe);
    } else {
        // Se não encontrar, exibe uma mensagem e um link para assistir no YouTube
        iframe.src = ""; // Remove qualquer vídeo carregado anteriormente
        resultadosContainer.innerHTML = `
            <p>Música não encontrada!</p>
            <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(pesquisa)}" target="_blank">
                <button>Buscar no YouTube</button>
            </a>
        `;
    }
}