function calculadora(a, b, condicao){

    if (condicao === 'soma'){
        return a + b;
    }
    if (condicao === 'divisao'){
        if (b === 0){
            return 'divisão por 0, não é permitida'
        }
        return a / b;
    }
    if (condicao === 'subtracao'){
        return a - b;

    }
    if (condicao === 'multiplicacao'){
        return a * b;
    }
    return console.log('operacao invalida');
}

console.log(calculadora(10, 5, 'soma'));         
console.log(calculadora(10, 5, 'subtracao'));    
console.log(calculadora(10, 5, 'multiplicacao')); 
console.log(calculadora(10, 5, 'divisao'));       
console.log(calculadora(10, 0, 'divisao'));       
console.log(calculadora(10, 5, 'modulo'));  







