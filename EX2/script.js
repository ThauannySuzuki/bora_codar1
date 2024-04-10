/*  Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */

let num = parseFloat(prompt("Digite um número: "))

if(num<0){
    document.write(num + " é negativo")
}
else if(num==0){
    document.write(num + " é igual a zero")
}
else if(num>0){
    document.write(num + " é positivo")
}