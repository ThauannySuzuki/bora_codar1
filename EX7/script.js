/* Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.  
 */

let contadora = 1
let armazena = 0

while(contadora<=6){
     armazena = prompt("Digite um valor")
    if(armazena>=72){
        let soma = armazena++
        document.write("a soma dos valores foi: " + soma)
    }
    else{
        document.write("os valores colocados foi: " + armazena)

    }
}
