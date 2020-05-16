let nomesConvidados = ["Jão da Silva", "Maria Da Silva"]

function adicionar() {
    let nome = document.getElementById("nomeConvidado").value
    let idade = document.getElementById("idadeConvidado").value
    let email = document.getElementById("emailConvidado").value

    if (nome == "") {
        alert("Preencha o nome do Convidado")
    } else
    if (idade == "") {
        alert("Preencha a idade do Convidado")
    } else
    if (email == "") {
        alert("Preencha o email do Convidado")
    } else {
        nomesConvidados.push([nome, idade, email])
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