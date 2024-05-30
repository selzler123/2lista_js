let inpValor1 = document.querySelector("#inpValor1");
let inpValor2 = document.querySelector("#inpValor2");
let btCalcular = document.querySelector("#btCalcular");
let resultadoSoma = document.querySelector("#resultadoSoma");
let resultadoSubtracao = document.querySelector("#resultadoSubtracao");
let resultadoMultiplicacao = document.querySelector("#resultadoMultiplicacao");
let resultadoDivisao = document.querySelector("#resultadoDivisao");




function calculo(){

    let valor1 = parseInt(inpValor1.value);
    let valor2 = parseInt(inpValor2.value);

    
    if (Number.isNaN(valor1) || Number.isNaN(valor2)) {
        alert("Por favor, insira números inteiros válidos.");
        return;
    }
    
    let soma = valor1 + valor2;
    resultadoSoma.textContent = "Soma dos 2 valores:  " + soma;

    let subtracao = valor1 - valor2;
    resultadoSubtracao.textContent = "Subtração dos 2 valores:  " + subtracao;

    let multiplicacao = valor1 * valor2;
    resultadoMultiplicacao.textContent = "Multiplicação dos 2 valores:  " + multiplicacao;

    let divisao = valor1 / valor2;
    resultadoDivisao.textContent = "Divisão dos 2 valores:  " + divisao;




}

btCalcular.onclick = function(){
    calculo()
}