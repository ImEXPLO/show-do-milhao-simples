window.onload = function () {
    tratar_eventos();
    tocar_audio('abertura');
}

function tratar_eventos() {

    // Jogador clicou no botão para começar o jogo
    document.getElementById("btn-comecar").onclick = function () {
        tocar_audio('comecar');
        document.getElementById("comecar").style.display = "none";
        document.getElementById("pergunta1000").style.display = "block";
    }

    document.getElementById("form-pergunta1000").onsubmit = function () {
        var opcao_correta = "2";
        var opcao_selecionada = this.pergunta1000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-2000');
            document.getElementById("pergunta1000").style.display = "none";
            document.getElementById("pergunta2000").style.display = "block";
        } else {
            document.getElementById("pergunta1000").style.display = "none";
            tocar_audio('errou')
            reinicia_jogo();
        }

        return false;
    }

    document.getElementById("form-pergunta2000").onsubmit = function () {
        var opcao_correta = "1";
        var opcao_selecionada = this.pergunta2000.value;

        if (opcao_selecionada == opcao_correta) {
            tocar_audio('pergunta-3000');
            document.getElementById("pergunta2000").style.display = "none";
            document.getElementById("pergunta3000").style.display = "block";
        } else {
            document.getElementById("pergunta2000").style.display = "none";
            tocar_audio('errou')
            reinicia_jogo();
        }

        return false;
    }
}

// Função para caso o usuário perca o jogo.

function reinicia_jogo() {
    document.getElementById("comecar").style.display = "block";
    document.getElementById("btn-comecar").innerHTML = "Jogar Novamente";
}

// Função para executar a voz do Silvio Santos

function tocar_audio(qual_tocar) {

    var audio = document.getElementById("silvio-santos")

    switch (qual_tocar) {
        case 'abertura':
            audio.src = "audio/abertura-show-do-milhao.mp3";
            break;
        case 'comecar':
            audio.src = "audio/1000.wav";
            break;
        case 'acertou':
            audio.src = "audio/parabens.wav";
            break;
        case 'ganhou':
            audio.src = "audio/ganhou.wav";
            break;
        case 'errou':
            audio.src = "audio/errou.wav";
            break;
        case 'pergunta-2000':
            audio.src = "audio/2000.wav";
            break;
        case 'pergunta-3000':
            audio.src = "audio/3000.wav";
            break;
        case 'pergunta-4000':
            audio.src = "audio/4000.wav";
            break;
        case 'pergunta-5000':
            audio.src = "audio/5000.wav";
            break;
        case 'pergunta-10000':
            audio.src = "audio/10000.wav";
            break;
        case 'pergunta-20000':
            audio.src = "audio/20000.wav";
            break;
        case 'pergunta-30000':
            audio.src = "audio/30000.wav";
            break;
        case 'pergunta-40000':
            audio.src = "audio/40000.wav";
            break;
        case 'pergunta-50000':
            audio.src = "audio/50000.wav";
            break;
        case 'pergunta-100000':
            audio.src = "audio/100000a.wav";
            break;
        case 'pergunta-200000':
            audio.src = "audio/200000.wav";
            break;
        case 'pergunta-300000':
            audio.src = "audio/300000.wav";
            break;
        case 'pergunta-400000':
            audio.src = "audio/400000.wav";
            break;
        case 'pergunta-500000':
            audio.src = "audio/500000.wav";
            break;
        case 'pergunta-1000000':
            audio.src = "audio/1000000.wav";
            break;
    }

    audio.play();
}
