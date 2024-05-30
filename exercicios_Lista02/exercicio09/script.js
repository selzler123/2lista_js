let ipNumeroAlunos = document.querySelector("#ipNumeroAlunos");
let ipNumeroTurmas = document.querySelector("#ipNumeroTurmas");
let btNumeroTurmas = document.querySelector("#btNumeroTurmas");
let resultado = document.querySelector("#resultado");

btNumeroTurmas.onclick = function () {
    calculoturmas();
}

function calculoturmas(){
    let calculo = Math.floor (Number(ipNumeroAlunos.value) / Number(ipNumeroTurmas.value));
    let sobra = Number(ipNumeroAlunos.value) % Number(ipNumeroTurmas.value);
    resultado.innerHTML = "Alunos por Turma" + calculo +  "<br>" + "Alunos Sobrando" + sobra;
    

}