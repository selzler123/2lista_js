let ipNumero = document.querySelector("#ipNumero");
let btVerificar = document.querySelector("#btVerificar");
let resultado = document.querySelector("#resultado");

btVerificar.onclick = function () {
    imparOuPar();
}

function imparOuPar() {
    if (Number(ipNumero.value) % 2 === 0) {
        resultado.textContent = "O Numero e Par";
        
    } else {
        resultado.textContent = "O Numero e Impar";
    }

    
}