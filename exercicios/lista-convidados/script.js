let convidados = ["Jão da Silva", "Maria da Silva"]

function adicionar() {
    let nome = document.getElementById("nomeConvidado").value
    convidados.push(nome)
    atualizarLista()
}

function atualizarLista() {
    let lista = document.getElementById("Lista")
    lista.innerHTML = ""

    for (let i = 0; i < convidados.length; i++) {
        lista.innerHTML = `<div>
                           <span>${convidados[i]}</span>     
                           </div>`
    }


}