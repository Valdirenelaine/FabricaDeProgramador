function enviarMensagem(tipoMensagem, textoMensagem, tipoResposta) {
    let divMensagem = document.querySelector(".div-mensagem");

    imprimirMensagem(divMensagem, textoMensagem, tipoMensagem)
    imprimirResposta(divMensagem, tipoResposta)
}

function limparMensagem() {
    let divMensagem = document.querySelector(".div-mensagem");
    divMensagem.innerHTML = '';
    imprimirResposta(divMensagem, -1)
}

function imprimirMensagem(divMensagem, textoMensagem, tipoMensagem) {
    if (tipoMensagem == 'Recebida') {
        divMensagem.innerHTML = divMensagem.innerHTML + (`<div class = "div-recebida"> 
                                                        <span class= "mRecebida">` + textoMensagem + `</spam> 
                                                        </div>`)

    } else {
        divMensagem.innerHTML = divMensagem.innerHTML + (`<div class = "div-enviada"> 
                                                        <span class= "mEnviada">` + textoMensagem + `</spam> 
                                                        </div>`)

    }

}

function imprimirResposta(divMensagem, tipoMensagem) {
    let imagem = document.getElementById("imagem");
    switch (tipoMensagem) {
        case -1:
            imprimirMensagem(divMensagem, 'Olá! Me chamo Cara, prazer em conhecê-lo!', 'Recebida')
            imagem.src = "img/emotion.svg"
            break;

        case 0:
            imprimirMensagem(divMensagem, 'E ai!', 'Recebida')
            imprimirMensagem(divMensagem, "<img src = 'img/face.svg' width = '15px'>", 'Recebida')
            imagem.src = "img/face.svg"
            break;
        case 1:
            imprimirMensagem(divMensagem, ':(', 'Recebida')
            imprimirMensagem(divMensagem, "<img src = 'img/sad.svg' width = '15px'>", 'Recebida')
            imagem.src = "img/sad.svg"
            break;
        case 2:
            imprimirMensagem(divMensagem, 'Você também ein', 'Recebida')
            imprimirMensagem(divMensagem, "<img src = 'img/feelings.svg' width = '15px'>", 'Recebida')
            imagem.src = "img/feelings.svg"
            break;

        default:
            break;
    }
    divMensagem.scrollTop = divMensagem.scrollHeight - divMensagem.clientHeight;
}