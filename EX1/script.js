/*  Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles. */

let n1 = parseFloat(prompt("Digite um número: "))
let n2 = parseFloat(prompt("Digite outro número: "))


if(n1>n2){
    document.write("O Número: " + n1 + "é maior o " + n2)
}
else{
    document.write("O número: " + n2 + "é maior que " + n1)
}