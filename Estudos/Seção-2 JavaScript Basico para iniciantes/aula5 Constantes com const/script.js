// const é uma constantes que não muda, por isso const de constantes
// As constantes precisam ter nomes significativos, para facilitar no entendimento
// Não pode começar o nome de uma constante com um número, não pode ter espaços, nem traços -
// Pode usar os estilos camelCase ou snake_case 
// Case-sensitive -> letras maiusculas e minusculas tem diferença pro motor do js
// Não podemos redeclarar constantes com const, somente com var
// não pode criar constantes com palavras reservadas da lingugagem
//const const
// E não pode fazer hoisting que nem a var ou uma função
// Não pode inicializar ela vazia e nem ser redeclarada

// Escopo: var(global, pode iniciar vazia, fazer hoisting, redeclarar) let(trecho de codigo, pode iniciar vazia) const(trecho de codigo, inicializar com algum valor)

// operadores: + - * /

// Boa pratica, as const é bom sempre ser em uppercase
const NOME = 'João'


const PRIMEIRONUMERO = 5;

const SEGUNDONUMERO = 10;

const RESULTADO  = PRIMEIRONUMERO * SEGUNDONUMERO

console.log(RESULTADO)

const RESULTADODUPLICADO = RESULTADO * 2

console.log(RESULTADODUPLICADO)

let resultadoTriplicado = RESULTADO * 3

console.log(resultadoTriplicado)

// Soma
resultadoTriplicado = resultadoTriplicado + 5

console.log(resultadoTriplicado)

// dentro de aspas `` '' "" é string = Text

// fora de aspas é um Number 

// Descobrir o tipo da variavel ou const
console.log(typeof PRIMEIRONUMERO)
console.log(typeof(PRIMEIRONUMERO))
let numeroString = `5`
console.log(typeof numeroString)

// concatenação
let numeroStringDois = `5` + `10` //510
console.log(numeroStringDois)

console.log(numeroStringDois + PRIMEIRONUMERO)

console.log(typeof(numeroStringDois + PRIMEIRONUMERO))