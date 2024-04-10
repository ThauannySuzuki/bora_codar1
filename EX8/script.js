/* Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" */

let n1 = parseInt(prompt("Digite a nota1: "))
let n2 = parseInt(prompt("Digite a nota2: "))
let n3 = parseInt(prompt("Digite a nota3: "))
let n4 = parseInt(prompt("Digite a nota4: "))

let media =  (n1+n2+n3+n4)/4


if(media>5){
    document.write("Você passou no teste!!")
}
else if(media<5){
    document.write("Tente novamente")
}