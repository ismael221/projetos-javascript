import entradaDeDados from 'readline-sync';
var contador = 0;

console.log("Digite o qual tabuada deseja visualizar: ");
var UserNumero = entradaDeDados.question();


console.log("Qual operação deseja realizar?: ");
var sinal = entradaDeDados.question("");


while(contador <= 10){
    var resultado = (UserNumero, sinal ,contador);
    console.log(UserNumero + sinal + contador + "=" + resultado);
    contador++;
}
;