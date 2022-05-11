import entradaDeDados from "readline-sync";


// Recebe dados do usuário como nome, sobrenome, idade etc.
console.log("Qual seu nome?: ");
var UserName = entradaDeDados.question("") ;

console.log("Qual seu sobrenome?: ");
var UserSobreNome = entradaDeDados.question("");

console.log("Qual a sua idade?: ");
var UserIdade = entradaDeDados.question("");

// Armazena dados recebidos em um objeto

var UserDados = [
    {id:1,UserName,UserSobreNome,UserIdade},
];


// Retorna os dados inseridos ao usuário

console.log("Deseja ver os dados cadastrados? " + '\n' + "1 para sim" + " 2 para não" );
var UserEscolha = entradaDeDados.question("");
var UserEscolha = Number(UserEscolha);
    if (UserEscolha === 1) {
        console.log(UserDados[0]);
}
    else if (UserEscolha === 2) {
        console.log("Obrigado por utilizar o nosso sistema.")
}
    else{
        console.log("Valor inserido não identificado.")
    }
;