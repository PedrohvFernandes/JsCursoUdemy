/*

Operadores Lógicos
&& -> AND -> E --> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU --> Se uma das expressões for verdadeira, retorna true
! -> NOT -> Não --> Inverte o valor da expressão

*/

//No And as duas comparações tem que retor true, pois se uma retornar false, o resultado será false:
// Para eu sair de casa: 
// Checar se eu tenho dinheiro no bolso && se esta fazendo sol la fora pra sair de casa. Se uma delas for false eu não posso sair de casa

// Consigo sair de casa
console.log('Consigo sair de casa: ',true && true);

// NÃO CONSIGO SAIR DE CASA
console.log('não Consigo sair de casa: ',true && false);

//expressão
const expressaoAnd = true && true && true && true && true;
console.log('expressaoAnd: ',expressaoAnd);

//expressão, so preciso que uma seja true para o restante de certo
const expressaoOr = true || false || false || false || false;
const expressaoOr2 = false || false || false || false || false;
console.log('expressaoOr: ',expressaoOr);
console.log('expressaoOr2: ',expressaoOr2);

// Ex mudo real:
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log('vaiLogar: ',vaiLogar);


// Expressão NOT inverte o valor, ou seja ele nega o valor da expressão
const expressaoNot = !true;
// Aqui ele nega o true fazendo ficar false, e o false fica true
const expressaoNot2 = !!true;
console.log('expressaoNot: ',expressaoNot);
console.log('expressaoNot2: ',expressaoNot2);