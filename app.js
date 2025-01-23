//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let inputName = document.querySelector("#amigo"); // swlecionando input
let Nome = [];
const Lista = document.querySelector("#listaAmigos");
const ResultadoSorteio = document.querySelector("#resultado");

function adicionarAmigo() {
  let novoAmigo = inputName.value;

  if (novoAmigo == "") {
    alert("erro nome incompleto/incorreto");
  }

  Nome.push(novoAmigo);
  console.log(Nome);

  inputName.value = "";
  Lista.innerHTML += `${novoAmigo} <br>`;

  inputName.focus();
}

function sortearAmigo() {
  let SorteioAmigo = Math.floor(Math.random()*Nome.length);
  const NomeAleatorio = Nome[SorteioAmigo];  
  ResultadoSorteio.innerHTML = NomeAleatorio;
}
