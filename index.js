// Funções simples (declarativa)

function saudacao(){
    return console.log("ola mundo");
}

// Função com parâmetros

function soma(valorA, valorB){
    const totalSoma = valorA + valorB;
    return console.log(totalSoma);
}

// Função Anônima

const multiplicar = function (valorA, valorB) {
    const total = valorA * valorB;
    return console.log(total);
}

// Arrow function

const dividir = (a, b) => a / b;

// Função com valor padrão de parâmetro

function exponencial(base, expoente = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

// Invocar as funções

saudacao();
soma(10, 5);
multiplicar(3, 6);
exponencial(3);
exponencial(3, 3);

console.log(dividir(10, 5));

// Função de callback

function inicializarAplicacao(){
    saudacao();
    soma(10, 5);
    multiplicar(3, 6);
    exponencial(3);
    exponencial(3, 3);

    console.log(dividir(10, 5));
}

inicializarAplicacao();