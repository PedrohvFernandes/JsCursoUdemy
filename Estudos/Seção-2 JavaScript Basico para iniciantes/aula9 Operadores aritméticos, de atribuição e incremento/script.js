/** Operadores:
 * Aritiméticos
 *  +(Adição / Contacenação) (- / *)
 *  **(Potenciação)
 *  %(resto da divisão)
 * 
 * Ordem de execução da procendencia: 
 * () ** 
 * * / % 
 * + -
 * 
 * 
 * Incremento = ++ -> ++pre e pos++ incremento
 * Decremento = -- -> ++pre e pos++ decremento
 * 
 * Operadores de atribuiçao -> += -+  *= **=
 * 
 * parseInt(inteiro), parseFloat(decimais(ponto flutuante)) e Number(numero qualquer)
 * 
 * 
 */

const num1 = 10;
const num2 = 5;
const num3 = 10

// Soma de valores
console.log(num1 + num2)

// No js tem a ordem de soma, ou seja procedência da matematica, necessariamente não precisa colocar o parentes entre o num2 e o num 3 pra ter ordem de execução na soma
console.log(num1 + num2 * num3)

// Mas se colocar parentes, o que esta dentro dele vai ser executado primeiro, que nem na matematica
console.log((num1 + num2) * num3)

// Concatenação de dois valores, unir valores
const num1string = 5
console.log(num1string + num2)

console.log(num1 * num2)

console.log(num1 - num2)

console.log(num1/ num2)

// Potenciação
console.log(num1 ** num2)

// Resto da divisão da divisão
console.log(num1 % num2)


// Incremento e decrementação não pode usar em const, pois contadores mudam
let contador = 1;
// Valor dela mais um
// pos++ -> ele executa a ação primeiro que a gente pedindo e depois ele faz o incremento do valor
contador++;// Sendo assim ela vai ter 2
contador++;// Sendo assim ela vai ter 3
contador++;// Sendo assim ela vai ter 4
// ++pre -> ele primeiro faz a conta e depois ele retorna o valor pra a gente
++contador;// Sendo assim ela vai ter 5
console.log(contador)

// Decrementaçao
contador--;// Sendo assim ela vai ter 4
console.log(contador)


let outroContador = 1;
// Ele soma mais um, mas não aparece que somou, porque ele faz o log da variavel primeiro e depois soma, o pos incremento
// Isso não é uma boa pratica, boa pratica é incrementar antes e depois exibir ne outra chamada, em vez de fazer tudo numa unica chamada
console.log(outroContador++)
// Agora mostra o 2
console.log(outroContador)
// Aqui ele ja faz a soma antes e depois o log, o pos incremento
console.log(++outroContador)


// Incremento de mais de um valor
let contadorComMaisDeUmValor = 0;
contadorComMaisDeUmValor = contadorComMaisDeUmValor + 2// 2
console.log(contadorComMaisDeUmValor)

// Usando uma variavel para definir de quanto em quanto deve incrimentar
let passos = 2
contadorComMaisDeUmValor = contadorComMaisDeUmValor + passos//4
console.log(contadorComMaisDeUmValor)

contadorComMaisDeUmValor = contadorComMaisDeUmValor + passos//6
contadorComMaisDeUmValor = contadorComMaisDeUmValor + passos//8
contadorComMaisDeUmValor = contadorComMaisDeUmValor + passos//10
console.log(contadorComMaisDeUmValor)

// Operadores de atribuiçao -> += -+  *= **=
// Atalho para fazer isso
// Fazendo uma atribuiçao e ja contando de dois em dois
let outroContadorComMaisDeUmValor = 0
outroContadorComMaisDeUmValor += passos; //contador = contador + passos
console.log(outroContadorComMaisDeUmValor)


// Nan -> Not a number -> Significa que deu algum erro, algum tipo de dado não bateu. Obs: isso é facilmente tratavel
const num5 = 10;
const num6 = `Pedro`
console.log(num5 * num6)

// Nesse caso ele tenta resolve
const num7 = '5' // ele resolve convertendo em number
console.log(num5 * num7)

// Convertendo numero inteiro
console.log(num5 + num7)
console.log(typeof num7)
console.log(num5 + parseInt(num7))
console.log(typeof parseInt(num7))