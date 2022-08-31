/*
Primitivos (Valor imutáveis, a gente não pode mudar nada neles, mas que podem ser copiados) - String, number, boolean, 
undefined, null, (bigint e symbol) - Valores copiadas, são independentes

Tipos de valor que é passado por referência (Mutavel), esse tipo de dado pode ser mudado - array, object e function são passadas como referencias, e se alterar tanto a variavel que esta pegando a referencia dos valores da variavel principal na memoria ou alterar a propia variavel principal com os valores na memoria, as duas variavies vão ser alteradas juntas, ou seja uma é dependente da outra - Passados por referencia
*/

// Primitivos:

// Aqui a gente não esta mudando o dado(valor) primitivo, a gente so esta trocando o valor da variavel
let nome = 'Pedro' //No caso o pedro é o valor
nome = 'Luiz'
console.log(nome)

// Outra visão que voce pode entender que a string é imutavel e primitivo é que as strings são indexadas 0123...
// Deveria ser exibido a letra L no indice 0, mas não, porque a string é imutavel, ela não pode ser alterada dessa forma
nome[0] = 'L'
// Eu consigo exibir so o indice 0, quanto pra array quanto pra string funciona de forma similar
console.log(nome[0], nome)

// Quando a gente falar que uma variavel é igual a outra, a gente ta fazendo uma copia do valor daquela variavel para outra quando esse dado for primitivo:
// Tanto a quanto b recebe o valor de A
let a = 'A'
let b = a //Copia da variavel de a para b, isso quando uso dados primitivos e nesse momento ambas são independentes uma da outra elas não dependem umas das outras, o b so vai depender pra pegar o valor de a na primeira vez, mas ao longo do codigo b vai manter seu valor indepentende do valor que a tiver
console.log(a, b)

// Ex: Ao longo do codigo b vai manter seu valor inicialmente indepentende do valor que a tiver
a = 'Outra coisa'
console.log(a, b)

// Referencia:

// Nesse caso eu não estou copiando os valores, mas sim a referencia dele, a instancia na memoria, ou seja arB esta apontando para o mesmo endereço em que ar esta apontando. Com isso, se eu mudar tanto o valor de ar e arB eu acabo afetando as duas
let ar = [1, 2, 3, 4, 5]
let arB = ar
console.log(ar, arB)

// Como é por referencia, o arB vai ser alterado tambem e se eu fizer a mesma coisa ou algum outro tipo de alteração no arB vai alterar o ar
ar.push(6)
console.log(ar, arB)

// Mudando somente o arB, que vai alterar o ar
arB.pop()
console.log(ar, arB)

let arC = arB
console.log(arC)

// Usando Operador spread pra copiar realmente os valores do array: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators. Com isso, arB e ar é independente um do outro. o spread funciona com objetos e funções
arB = [...ar]
arB.push(10)
console.log(arB)

// Com objetos
let pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otávio'
}

let pessoa2 = pessoa
console.log(pessoa, pessoa2)

pessoa.nome = 'João'
console.log(pessoa, pessoa2)

// So fazer um spread(espalhar com tres pontinhos, o valor de pessoa no valor de pessoa2), fazendo com que os dois objetos fiquem independentes um do outro, mas com os mesmo valores, sem ser por referencia
pessoa2 = { ...pessoa }
pessoa.nome = 'Gabriel'
pessoa2.nome = 'Pedro'
console.log(pessoa, pessoa2)
