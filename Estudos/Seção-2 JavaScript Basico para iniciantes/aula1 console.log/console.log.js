// Na maioria dos casos a gente usa o console.log pra debugar algo ou fazer aparecer algo na tela, pra testar alguma função
// console é um objeto de uma classe e o log é uma função desse objeto de uma classe
// Essas mensagens so são exibidas no console do inspecionar elemento e no terminal do vs

// Sem ponto e virgula
console.log()
// Com ponto e virgula
console.log();

// Dentro do console.log pode ser uma cadeia de caracteres, numero, variaveis, objetos
// Valor literal ->  cadeia de caracteres(String/texto). Obs: não pode estar sem as aspas simples ou duplas
// Js é uma linguagem dinamica, de tipagem dinamica os valores das variaveis são definidas automaticamente, não é igual o java que tem uma tipagem forte que voce precisa definir o tipo dela
console.log("Hello hello world :) 1");
console.log('Hello hello world :) 2');

// com crases, serve pra fazer o template string  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
console.log(`Hello hello world :) 3`);
// Dessa maneira padrão pra concatenar
console.log('Hello hello world :) ' + 3);
// pra template string
var ex = 3; //number
console.log(`Hello hello world :) ${ex}`);

// Aspas simples dentro de asplas duplas pode e Aspas duplas dentro de asplas simples pode e a mesma coisa para crases
console.log("Hello hello 'world :)' 4");
console.log('Hello hello "world :)" 5');
console.log(`Hello 'hello' "world :)" 5`);

// Errado
// console.log('Hello hello 'world :)' 3');
// console.log("Hello hello "world :)" 3");

// exibindo numeros
console.log(123456);

// Numeros reais(numeros de ponto flutuante)
console.log(123456, 15.85, 87.89, 1);

console.log(35, 15.85, 'Pedro Henrique com numeros');

console.log(35, 15.85 + 'Pedro Henrique com numeros');