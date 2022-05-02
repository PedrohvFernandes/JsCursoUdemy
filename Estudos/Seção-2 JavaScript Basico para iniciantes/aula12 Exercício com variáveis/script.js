// Apontamentos na memoria de uma variavel
// Quero que o valor de A tenha o valor de B, quero que o valor de B tenha o valor de C e o C tenha o valor de A

// não pode fazer isso
// varA = B
// varB = C
// varC = A

let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

console.log(varA, varB, varC);
// Pode criar variavel auxiliar, uma variavel temporaria
let aux = varA;

// Dessa forma consigo passar o A pra o ultimo, o C pro meio e B pro inicio. Pois a gente guardou o endereço de memoroia(ponteiro) do varA
varA = varB;
varB = varC;
varC = aux;

console.log(varA, varB, varC);

// OutraManeira em js

let varA1 = "A"; //B
let varB2 = "B"; //C
let varC3 = "C"; //A

// varA1 tem valor de 1, varB2 tem valor de 2 e varC3 tem valor de 3
// [varA1, varB2, varC3] = [1, 2, 3]

// console.log(varA1, varB2, varC3)

[varA1, varB2, varC3] = [varB2, varC3, varA1];

console.log(varA1, varB2, varC3);
