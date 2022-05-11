import entradaDeDados from "readline-sync";
console.log("Quantas milhas deseja converter?: ");
var milhas = entradaDeDados.question("Milhas: ");
var kms = (milhas/0.62137);
var kms = kms.toFixed(4)
console.log( milhas + " milhas é igual a: " + kms + " Kms");