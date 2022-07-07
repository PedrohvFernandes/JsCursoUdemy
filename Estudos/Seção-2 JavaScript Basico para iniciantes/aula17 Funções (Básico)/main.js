// Criando uma função -> function nomeDaFuncao(parametros){}
// Os Nomes das funções tem as mesmas regras que os nomes de variáveis
// {} -> corpo da função / bloco de codigo. E tudo dentro desse bloco de codigo é protegido, pertecendo somente a função e não ao escopo global, mas se a variavel for do tipo var ela é escopo global podendo acessar ela em qualquer lugar do código.
function saudacao() {
  console.log('Saudação\n')
}
// Invocando/chamando a função -> nomeDaFuncao(parametros);
// Pra falar que a função esta sendo executada -> saudacao(); -> sem o parenteses eu so chamo a função e não executo ela
// Geralmente a gente chama a função sem o parenteses quando espera um retorno de chamada(callback), tipo um evento, click de alguma coisa etc.
saudacao()

// função com parametros, que nada mais uma variavel temporaria, mas que não retorna nada
function nomeDaPessoa(nome) {
  // Sem o return ela retorna undefined, mas executa o que esta aqui dentro
  console.log(`Bom dia ${nome}!\n`)
}

nomeDaPessoa('João')
nomeDaPessoa('Maria')

// Dessa maneira eu salvo o que a funçao retorna, mas como na função nomeDaPessoa não tem return, eu não posso salvar nada.
const variavel = nomeDaPessoa('Pedro')
console.log(
  'O que foi retornado da função que não retorna nada: ',
  variavel,
  `\n`
)

// Função com parametros e retorno
function nomeDaPessoa2(nome) {
  // Colocando o return ela retorna algo e executa o que esta aqui dentro. Mesma coisa com os ifs
  return `Bom dia ${nome}!\n`
}

// Dessa maneira eu salvo o que a funçao retorna
const variavel2 = nomeDaPessoa2('luiz')
console.log('O que foi retornado da função que retorna algo: ', variavel2, `\n`)

// Função que faz soma entre dois valores
function soma(x, y) {
  const resultado = x + y
  return resultado
}

console.log(`Resultado da soma ${soma(1, 2)}`, `\n`)
// Não consigo acessar a variavel resultado porque ela esta dentro de uma função. Esta protegido, ou seja no escopo da função.
// console.log('Não retorna nada: ',resultado,`\n`);
// Tanto que eu consigo criar a mesma variavel dentro de uma função com const que não vai dar problema
const resultado = soma(5, 2)
console.log(resultado, `\n`)

function soma2(x, y) {
  const resultado = x + y
  // Quando se usa o return, a função não executa mais o que esta dentro dela, e sim retorna o que esta dentro do return, ou seja é igual nos ifs, se dentro de um if tiver o return e cair dentro dele ele ja para o codigo ali e não executa o restante dos ifs/codigo, mesma coisa com a função nomeDaPessoa2 ou soma2
  return resultado
  // Não sera executado:
  console.log('ola mundo')
}

console.log('Abaixo do return não executa mais nada: ', soma2(2, 8), `\n`)

// NaN -> Not a Number -> porque eu to tentando fazer uma soma com um valor que não é um numero, undefined, porque eu não estou enviando nem um valor, nem um parametro. Ou seja os parametros não vai apontar para lugar nem um na memoria
console.log('NÃO PASSEI VALOR ALGUM: ', soma2(), '\n')

// Função com parametros, mas com valores default(padrão), sempre que eu não enviar nem um parametro, eu pego o valor padrão
function soma3(x = 1, y = 1) {
  const resultado = x + y
  return resultado
}
console.log(
  'NÃO PASSEI VALOR ALGUM, MAS OS PARAMETROS TEM VALORES DEFAULTS: ',
  soma3()
)
console.log(
  'NÃO PASSEI O 2 VALO, MAS O 2 PARAMETRO TEM VALOR DEFAULT: ',
  soma3(8)
)
console.log(
  'PASSEI OS VALORES, OS VALORES DEFAULTS SÃO IGNORADOS: ',
  soma3(5, 5),
  '\n'
)

// Outras maneiras de criar funções:
// 1. Função anonima -> função que não tem nome(pode ter nome se quiser, mas deixa de ser anonima) e é através de uma variavel. Precisa do ponto e virgula no final dela
// 2. Função arrowFunction -> função que não tem nome fuction para declarar.

const raiz = function (x) {
  return Math.sqrt(x)
}

console.log('Função anonima: ',raiz(4))

// Com um parametro
const raiz2 = x => Math.sqrt(x)
console.log('ArroFunction com um parametros: ',raiz2(4))

// Com varios parametros
const soma4 = (x, y) => x + y
console.log('ArroFunction com varios parametros: ',soma4(5, 5))

// E da maneira com corpo, mas sendo arrowFunction
const soma5 = (x, y) => {
  return x + y
}
console.log('ArroFunction com um corpo e varios parametros: ',soma5(9, 5))

soma6 = (x, y) => x + y
console.log(soma6(12,5))
