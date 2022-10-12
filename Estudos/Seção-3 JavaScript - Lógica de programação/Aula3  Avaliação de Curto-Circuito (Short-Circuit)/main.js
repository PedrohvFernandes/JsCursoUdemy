/*

&& -> false && true -> false "O valor mesmo"
|| -> OR -> OU --> vai retornar "o valor verdadeiro"


em js false ja é literalmente false, mas temos o false values: 0, '', "", ``, null, undefined, NaN

*/

// Ele me retorna 0 porque 0 é como se fosse false, e como and so precisa de um false pra ele retorna, então ele retorna o valor da primeira expressão em false que ele encontra	
console.log('Luis' && 0 && 'Maria'); // 0

console.log('Luis' && 0 && NaN); // 0

console.log('Luis' && true && NaN); // Nan

// No caso aqui como tudo foi true, então ele retorna o ultimo valor que ele encontrou
console.log('Luis' && true && 'Maria'); // Maria

// Ele sempre vai me retornar o valor da ultima expressão que for verdadeira
console.log('Luiz' && 'Maria' && 'João'); // João


console.log('Luiz' && NaN && 'João'); // NaN
console.log('Luiz' && '' && 'João'); // ''



// Cenario:

function falaOi() {
  return 'Oi';
}

const vaiExecutarAnd = false;
const executouAnd = vaiExecutarAnd && falaOi();

console.log('fala oi and: ',executouAnd); // false

// O or so precisa que so um seja true, então ele retorna o primeiro valor que ele encontrar que seja true, diferente do and que é o ultimo valor que ele encontrar que seja true

console.log('Luiz' || 'Maria' || 'João'); // Luiz
console.log(0 || false || null || 'Pedro' || true); 'Pedro'


const vaiExecutarOr = false;
const executouOr = vaiExecutarOr || falaOi();

console.log('fala oi or: ',executouOr); // oi