/* Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */

let n1 = parseFloat(prompt("Digite um número: "))
let n2 = parseFloat(prompt("Digite um número: "))
let n3 = parseFloat(prompt("Digite um número: "))

if(n1>n2&&n3){
    document.write(n1 + " é o maior numero entre eles")
}

else if(n2>n3&&n1){
    document.write(n2 + " é maior entre eles")
}
else if(n3>n1&&n2){
    document.write(n3 + " é maior entre eles")
}