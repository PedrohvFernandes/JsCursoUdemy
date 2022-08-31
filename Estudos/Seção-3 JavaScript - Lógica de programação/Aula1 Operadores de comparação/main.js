/*
Operadores de comparação -> eles comparam 
> Maior que 
>= Maior que ou igual a, são duas expressões ao mesmo tempo, qualquer uma vai dar verdadeira
< menor que
<= menor que ou igual a
== igualdade do dado(valor) (= atribuição)
=== igualdade do dado e do tipo do dado(igualdade estrita)
!= diferente do dado
!== diferente estrito
*/

// Agora começa entrar a utilização dos booleans: porque essa expressão, vai me dizer se 10 é maior que 5, se sim é true se não é false
console.log(10 > 5) // true
console.log(10 < 5) // false

// Posso jogar isso em uma variavel
const expressao = 10 > 5
console.log(expressao)

console.log(10 < 5)
console.log(10 <= 5)


const num1= 10;
const num2 = 11;
const comp = num1 < num2
console.log('Comp1:', comp)

const num3 = 20;
const num4 = 20;
const comp2 = num3 == num4
console.log('Comp2:', comp2)


const num5 = 20;
const num6 = 22;
const comp3 = num5 == num6
console.log('Comp3:', comp3)

const num7 = 20;//number
const num8 = "20";//string
// const comp4 = num7 == num8
const comp4 = num7 === num8
console.log('Comp4:', comp4)


const num9 = 20;//number
const num10 = "20";//string
// const comp4 = num7 == num8
const comp5 = num9 !== num10
console.log('Comp5:', comp5)