const numero = 10
// Ele checa da esquerda para direita indo para baixo, se a condição for verdadeira ele executa o bloco de código e da continuidade no código, sendo assim so basta de um true para quebrar todos os outros ifs, so uma condição de todo o bloco de ifs sera executada, mesma que tenha outra verdadeira. Ou seja, é uma função encadeada, um if depende do outro sendo false para que o proximo seja executado e o else todos tem que ser false.
if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5')
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8')
} else if (1 === 1) {  //verdadeiro, mas essa vai fazer destruir todo o bloco de if, pois so basta de um true para dar continuidade na execução no codigo inteiro
  console.log('1 é igual a 1 LITERAL')
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
  console.log('O número está entre 9 e 11')
} else {
  console.log('O número não está entre 0 e 11')
}

// Para um if não quebre todo o bloco de ifs: é fazer if separado, caso os dois ou mais chequem coisas diferentes
if (1 === 1) { 
  console.log('1 é igual a 1 LITERAL novamente')
} 

if(numero === 10){
  console.log('O número é igual a 10')
}

if (numero >= 0 && numero <= 5) {
  console.log('O número está entre 0 e 5')
} else if (numero >= 6 && numero <= 8) {
  console.log('O número está entre 6 e 8')
} else if (numero >= 9 && numero <= 11) { // Verdadeiro
  console.log('O número está entre 9 e 11')
} else {
  console.log('O número não está entre 0 e 11')
}

console.log('...Resto do codigo')