let ipNumero1 = document.querySelector("#ipNumero1");
let ipNumero2 = document.querySelector("#ipNumero2");
let btComparar = document.querySelector("#btComparar");
let resultado = document.querySelector("#resultado");

btComparar.onclick = function() {
    compararNumeros();

    
}

function compararNumeros() {
    if (Number(ipNumero1.value) > Number(ipNumero2.value)) {
        resultado.textContent = "O Primeiro Numero e Maior"
    }
    else if (Number(ipNumero1.value) === Number(ipNumero2.value)) {
        resultado.textContent = "Os Numeros Sao Iguais"

    }
    else {
        resultado.textContent = "O primeiro Numero e Menor"

    }
    
}