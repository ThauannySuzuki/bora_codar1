/*  Escreva um programa que verifique a validade de uma senha fornecida pelo usuário. A senha válida é o número "1234" sem aspas. Devem ser impressas as seguintes mensagens: "ACESSO PERMITIDO" caso a senha seja válida. "ACESSO NEGADO" caso a senha seja inválida.
 */

let senha = parseInt(prompt("Digite a senha: "))

if(senha==1234){
    document.write("ACESSO PERMITIDO.")
}
else{
    document.write("ACESSO NEGADO.")
}