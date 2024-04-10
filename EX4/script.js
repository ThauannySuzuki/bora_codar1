/* Faça um programa que leia dois valores informados pelo usuário e exiba uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo seja maior que o primeiro. */

let n1 = parseFloat(prompt("Digite um numero"))
let n2 = parseFloat(prompt("Digite um numero"))

if(n1==n2){
    document.write("Os números são iguais")
}
else if(n1>n2){
    document.write("O Primeiro valor é maior")
}
else if(n2>n1){
    document.write("O segundo valor é maior")
}