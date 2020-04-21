let inseriNumero, ultimaOperacao, expressao

function realizarOperacao(tipo) {
    let numero1, numero2, resultado

    if (document.getElementById("num1").value == undefined) {
        document.getElementById("num1").value = 0
    }
    inseriNumero = 1
    numero1 = parseFloat(document.getElementById("num1").value)
    if ((ultimaOperacao == undefined) != (ultimaOperacao == '')) {
        ultimaOperacao = '+'
    }
    if (tipo == '%') {

    }
    if (ultimaOperacao == '=') {
        resultado = numero1
        ultimaOperacao = tipo
    } else
    if (tipo == 'C') {
        document.getElementById("num1").value = 0
        document.getElementById("num2").value = undefined
        document.getElementById("num2").style.opacity = 0
        document.getElementById("num2").innerHTML = undefined
    } else {
        if (tipo == 'CE') {
            document.getElementById("num1").value = 0
        } else {
            if (document.getElementById("num2").value != undefined) {
                numero2 = document.getElementById("num2").value

                if (tipo == '=') {
                    resultado = expressao
                } else {
                    resultado = numero2 + ultimaOperacao + numero1

                    expressao = expressao + ultimaOperacao + numero1
                }
            } else {
                expressao = numero1
                resultado = numero1
            }
            setResultado(resultado)

            if (ultimaOperacao == '=') {
                document.getElementById("num1").value = eval(resultado)
                document.getElementById("num2").innerHTML = undefined
                document.getElementById("num2").value = eval(resultado)
                document.getElementById("num2").style.opacity = 0
                inseriNumero = 0
            } else {
                ultimaOperacao = tipo
            }
        }
    }
}

function setResultado(resultado) {
    document.getElementById("num2").innerHTML = expressao
    document.getElementById("num1").value = eval(resultado)
    document.getElementById("num2").value = expressao
    document.getElementById("num2").style.opacity = 1
}

function adicionar(num) {
    if ((inseriNumero == 1) || (inseriNumero == undefined)) {
        document.getElementById("num1").value = num
        inseriNumero = 0
    } else {
        document.getElementById("num1").value = document.getElementById("num1").value + String(num)

    }




}