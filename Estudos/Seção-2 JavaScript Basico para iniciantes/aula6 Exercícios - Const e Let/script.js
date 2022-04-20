/*
NOME tem IDADE anos, pesa PESO kg
tem ALTURA de altura e tem IMC é de IMC
NOME nasceu em ANODENASCIMENTO
*/

const NOME = 'Pedro Henrique'
const SOBRENOME = 'Vieira Fernandes'
const ANODENASCIMENTO = 2001;
const PESO = 84;
const ALTURAM = 1.64

let imc; //peso / (altura²)
let dataAtual;

imc = PESO/(ALTURAM * ALTURAM)
dataAtual = new Date().getFullYear()
console.log(`${NOME + ' ' + SOBRENOME} TEM ${dataAtual - ANODENASCIMENTO} ANOS, PESA ${PESO} KG
TEM ${ALTURAM} DE ALTURA E TEM ${imc} É DE IMC
${NOME + SOBRENOME} NASCEU EM ${ANODENASCIMENTO}
`)

