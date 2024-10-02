function verificaMaioridade() {
    const idade = document.getElementById('idade').value;
    const resultado = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade";
    document.getElementById('resultadoMaioridade').innerText = resultado;
}

function verificaParOuImpar() {
    const numero = document.getElementById('numero').value;
    const resultado = numero % 2 === 0 ? "Par" : "Ímpar";
    document.getElementById('resultadoParOuImpar').innerText = `O número ${numero} é ${resultado}.`;
}

function verificaNumero() {
    const numero = document.getElementById('numeroVerificacao').value;
    let resultado;
    if (numero > 0) {
        resultado = "Número positivo";
    } else if (numero < 0) {
        resultado = "Número negativo";
    } else {
        resultado = "Zero";
    }
    document.getElementById('resultadoNumero').innerText = resultado;
}

function exibeTabuada() {
    const numero = document.getElementById('numeroTabuada').value;
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }
    document.getElementById('resultadoTabuada').innerHTML = resultado;
}

