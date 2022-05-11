import entradaDeDados from "readline-sync";

let contador = 1

var pizzas = [];

console.log("Digite um nome de uma pizza: ");
pizzas[contador] = entradaDeDados.question("");
console.log("1 - inserir outra pizza 2 - finalizar");
var opcao = entradaDeDados.question("");
var opcao = Number(opcao);
