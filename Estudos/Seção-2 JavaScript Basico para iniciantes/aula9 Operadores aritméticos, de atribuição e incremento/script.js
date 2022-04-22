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
 * 
 * 
 * 
 * 
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

contador--;// Sendo assim ela vai ter 4
console.log(contador)