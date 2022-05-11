import  entradaDados from   'readline-sync';

let nome = entradaDados.question('Digite o seu nome:    ');
console.log('Olá, '+nome);