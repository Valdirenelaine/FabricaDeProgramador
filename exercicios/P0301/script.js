function salvar() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let cpf = document.getElementById("cpf").value
    let total = document.getElementById("total").value
    let parcela = document.getElementById("parcela").value
    let formapag = document.querySelector("input[type=radio]:checked")

    if (nome == "") {
        exibirMensagemErro("Preencha o Nome do Cliente.")
    } else if (telefone == "") {
        exibirMensagemErro("Preencha o telefone do Cliente.")
    } else if (cpf == "") {
        exibirMensagemErro("Preencha o cpf do Cliente.")
    } else if (total == "") {
        exibirMensagemErro("Preencha o total da Compra.")
    } else if (formapag == null) {
        exibirMensagemErro("Informe a forma de pagamento")
    } else if (parcela == 0) {
        exibirMensagemErro("Informe a quantidade de parcelas")
    } else {

        exibirMensagemSucesso();
        imprimirRelatorio();
    }
}

function exibirMensagemSucesso() {
    document.querySelector(".alerta img").scr = "img/tick.svg"
    document.querySelector(".alerta").style.backgroundColor = "lightgreen"
    document.querySelector(".alerta p").innerHTML = "Salvo com Sucesso"
    document.querySelector(".alerta").style.visibility = "visible"
}

function exibirMensagemErro(mensagem) {


    document.querySelector(".alerta").style.backgroundColor = "#ff5252"
    document.querySelector(".alerta p").innerHTML = mensagem
    document.getElementById("imagem").src = "img/alert.svg"
    document.querySelector(".alerta").style.visibility = "visible"
}


function fecharMensagem() {

    document.querySelector(".alerta").style.visibility = "hidden"
    document.querySelector(".div-relatorio").style.visibility = "hidden"

}

function cancelar() {
    document.querySelector(".formulario").reset()
    fecharMensagem()
}

function imprimirRelatorio() {
    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let cpf = document.getElementById("cpf").value
    let total = document.getElementById("total").value
    let parcela = document.getElementById("parcela").value
    let formaPag = document.querySelector("input[type=radio]:checked")
    let pagamento = ""
    switch (formaPag.value) {
        case "1":
            pagamento = "Dinheiro"
            break
        case "2":
            pagamento = "Cartão de Crédito"
            break
        case "3":
            pagamento = "Cartão de Débito"
            break
        default:
            pagamento = "Modalidade Inválida"
            break
    }

    document.querySelector(".div-relatorio").style.visibility = "visible"
    document.querySelector(".div-relatorio pre").innerHTML =
        `
    ============================================= 
    CLIENTE: ${nome}
    ============================================= 
    CPF: ${cpf}
    =============================================
    TELEFONE:${telefone}
    =============================================
    TOTAL:${total}
    =============================================
    Forma de Pagamento: ${pagamento}
    =============================================
         
         `

}