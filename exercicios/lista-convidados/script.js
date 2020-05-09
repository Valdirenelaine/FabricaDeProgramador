let nomesConvidados = ["Jão da Silva", "Maria Da Silva"]

function adicionar() {
    let nome = document.getElementById("nomeConvidado").value

    if (nome == "") {
        alert("Preencha o nome do Convidado")
    } else {
        nomesConvidados.push(nome)
        atualizarLista()
    }
}

function atualizarLista() {
    let lista = document.getElementById("divLista")
    lista.innerHTML = ""

    for (let i = 0; i < nomesConvidados.length; i++) {
        lista.innerHTML = lista.innerHTML + `<div>
                           <span>${nomesConvidados[i]}</span>     
                           </div>`
    }


}