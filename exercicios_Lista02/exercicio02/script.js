let inpValor1 = document.querySelector("#inpValor1");
let btCalcular = document.querySelector("#btCalcular");
let resultadoOvos = document.querySelector("#resultadoOvos");
let resultadoQueijo = document.querySelector("#resultadoQueijo");

function calcularIngredientes() {
    let numPessoas = Number(inpValor1.value);

    let ovosPorPessoa = 2;
    let queijoPorPessoa = 50;

    let totalOvos = numPessoas * ovosPorPessoa;
    let totalQueijo = numPessoas * queijoPorPessoa;

    resultadoOvos.textContent = "Ovos necessários: " + totalOvos;
    resultadoQueijo.textContent = "Queijo necessário: " + totalQueijo + " gramas";
}

btCalcular.onclick = function() {
    calcularIngredientes();
}
