/* - Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
 */

let atual = parseInt(prompt("Digite o ano atual: "))
let ano = parseInt(prompt("Digite o ano que você nasceu: "))

let idade = atual-ano

if(idade>18){
    document.write("Você pode votar!!!!!")
}
else{
    document.write("Você não pode votar.")

}