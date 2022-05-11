import entradaDados from "readline-sync";

//Mostra o Cardapio:
var pizzas = [
    {id: 1, nome: "calabresa", descricao: "calabresa,tomate,molho napolitano,cebola,oregano e azeitona" , valor: "27,90"},
    {id: 2, nome: "Êconomica 1", valor: "27,90"},
    {id: 3, nome: "Êconomica 2", valor: "27,90"},
    {id: 4, nome: "Êconomica 3", valor: "27,90"},
    {id: 5, nome: "Romana", valor: "27,90"},
    {id: 6, nome: "Moda da casa", valor: "27,90"},
    {id: 7, nome: "Moda do pizzaiolo", valor: "27,90"},
    {id: 8, nome: "Marguerita", valor: "27,90"},
    {id: 9, nome: "Frango e catupiry", valor: "27,90"},
    {id: 10, nome: "Calabresa e Bacon", valor: "27,90"},
    {id: 11, nome: "Portuguesa", valor: "27,90"},
];
console.log("Essas são nossa pizzas: \n")
console.log(pizzas[0].nome,"\n", pizzas[0].descricao, "\n", "valor: ",pizzas[0].valor);

//Recebe o nome do cliente e da boa noite ao mesmo:
let nomeCliente = entradaDados.question("Digite seu nome: ");
console.log("Boa Noite "+nomeCliente);


//Recebe pedido
let pedido = entradaDados.question("Qual pizza o senhor deseja?: ");
let formaPagamento = entradaDados.question("Qual a forma de pagamento: ");


//Imprime pedido
if (pedido = 1){
    console.log(nomeCliente, "\n",pizzas[0].nome,'\n', formaPagamento, '\n', "Total: ", pizzas[0].valor) 
}
else {
 console.log("Pedido não registrado.")
}