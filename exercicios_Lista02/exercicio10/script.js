
let ipValorVendido = document.querySelector("#ipValorVendido");
let ipMetaMinima = document.querySelector("#ipMetaMinima");
let ipMeta = document.querySelector("#ipMeta");
let btCalculoMeta = document.querySelector("#btCalculoMeta");
let resultado = document.querySelector("#resultado");

btCalculoMeta.onclick = function () {
    percentual();
}
function percentual (){
    let meta = (Number(ipValorVendido.value) / Number (ipMeta.value)) * 100;
    let metaMinima = (Number(ipValorVendido.value) / Number (ipMetaMinima.value)) * 100;
   
    if (meta >= 100) {
        resultado.innerHTML = "Parabéns! Você atingiu a meta.";
    } else if (metaMinima >= 100) {
        resultado.innerHTML = "Você atingiu a meta mínima.";
    } else {
        resultado.innerHTML = "Você não atingiu a meta nem a meta mínima.";
    }

    resultado.innerHTML += "<br>Percentual de atingimento da meta: " + meta.toFixed(2) + "%";
    resultado.innerHTML += "<br>Percentual de atingimento da meta mínima: " + metaMinima.toFixed(2) + "%";

}

