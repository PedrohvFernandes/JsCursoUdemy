let num1 = prompt(`Digite um número`)
let num2 = prompt(`Digite um número`)
num1 = Number(num1)
num2 = Number(num2)
let soma = num1 + num2

// Usando template string

// Dessa maneira direto deixa o codigo implicito, mas diminui o codigo, mas como não vou utilizar essa variavel em outro lugar, então eu posso utilizar dessa forma
alert(`O resultado da soma é ${num1 + num2}`)
// Ja explicito pra ter um facil entendimento e deixa o codigo grande
alert(`O resultado da soma é ${soma}`)