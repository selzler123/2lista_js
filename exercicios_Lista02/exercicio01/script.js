let inpCampo1 = document.querySelector("#inpCampo1");
let btCalcular = document.querySelector("#btCalcular");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");
let resultado4 = document.querySelector("#resultado4");

function soma(){

    let valor = Number(inpCampo1.value);

    let calculo = (valor * 1 * 0.01) + valor;
    resultado1.textContent = calculo
    let calculo2 = (valor * 1 * 0.02) + valor;
    resultado2.textContent = calculo2
    let calculo3 = (valor * 1 * 0.05) + valor;
    resultado3.textContent = calculo3
    let calculo4 = (valor * 1 * 0.1) + valor;
    resultado4.textContent = calculo4

}
    
    btCalcular.onclick = function(){
        soma()


}