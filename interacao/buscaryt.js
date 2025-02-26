function buscarMusica(){
    var pesquisa = document.getElementById('pesquisa').ariaValueMax.trim()

    if(!pesquisa){
        alert('Digite o nome da música')
        return
    }

    // Verifica se o nome da música está no objeto 'musicas'
    if(musicas.hasOwnProperty(pesquisa)){
        var videoURL = musicas[pesquisa]

        // Exibe o vídeo no iframe
        var iframe = document.createElement('iframe');
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = videoURL;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        // Exibe o iframe na página
        var resultadosContainer = document.getElementById('resultados');
        resultadosContainer.innerHTML = ''; // Limpa resultados anteriores
        resultadosContainer.appendChild(iframe);
    }
    else {
        // Caso a música não seja encontrada
        var resultadosContainer = document.getElementById('resultados');
        resultadosContainer.innerHTML = 'Música não encontrada!';
    }
}