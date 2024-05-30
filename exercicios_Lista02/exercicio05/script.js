
function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();
    return anoAtual - anoNascimento;
}


let pessoas = [];


function adicionarPessoa() {
    let nome = prompt("Digite o nome da pessoa:");
    let anoNascimento = parseInt(prompt(`Digite o ano de nascimento de ${nome}:`));
    let idade = calcularIdade(anoNascimento);
    pessoas.push({ nome: nome, idade: idade });
}


for (let i = 0; i < 3; i++) {
    adicionarPessoa();
}


pessoas.sort((a, b) => b.idade - a.idade);


let output = document.getElementById("output");
output.innerHTML += "<h2>Pessoa mais velha:</h2>";
output.innerHTML += `<p>${pessoas[0].nome} - ${pessoas[0].idade} anos</p>`;

output.innerHTML += "<h2>Segunda pessoa mais velha:</h2>";
output.innerHTML += `<p>${pessoas[1].nome} - ${pessoas[1].idade} anos</p>`;

output.innerHTML += "<h2>Terceira pessoa mais velha:</h2>";
output.innerHTML += `<p>${pessoas[2].nome} - ${pessoas[2].idade} anos</p>`;
