function salvar(tipo) {
    if (tipo == 0) {
        document.getElementById("minhaImagem").src = "img/emotion.svg"
        document.getElementById("resposta1").style.opacity = 0
        document.getElementById("resposta2").style.opacity = 0

    } else {
        if (tipo == 1) {
            document.getElementById("minhaImagem").src = "img/face.svg"
            document.getElementById("resposta1").innerHTML = "Olá!"
            document.getElementById("resposta2").innerHTML = "E ai!"

        } else
        if (tipo == 2) {
            document.getElementById("minhaImagem").src = "img/sad.svg"
            document.getElementById("resposta1").innerHTML = "Não te gosto"
            document.getElementById("resposta2").innerHTML = ":'("

        } else
        if (tipo == 3) {
            document.getElementById("minhaImagem").src = "img/feelings.svg"
            document.getElementById("resposta1").innerHTML = "Está Elegante hoje"
            document.getElementById("resposta2").innerHTML = "Você também hein"

        }
        document.getElementById("resposta1").style.opacity = 1
        document.getElementById("resposta2").style.opacity = 1

    }


}