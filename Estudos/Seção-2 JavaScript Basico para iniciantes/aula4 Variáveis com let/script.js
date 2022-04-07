console.log('Script!!!');
console.log('Script!!!');
console.log('Script!!!');
console.log('Script!!!');
console.log('Script!!!');

// Variavel -> valor ne algum endereço na memoria 
//  variavel -> algo que pode ser alterado durante o codigo -> let e var
// contantes -> não pode ser alterado, ela tem um valor constante -> const

let nomeScript = 'Script!!!'
console.log(nomeScript)

// Hoje a gente usa mais o let em vez do var, pois o var ele tem um escopo geral, qual quer funcção pode acessar ela, enquanto o let somente aquele bloco de codigo
// Com isso var não tem segurança nem uma. Com var é possivel fazer hoisting https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting tipo uma função
// Isso quer dizer que ela pode ser inicializada depois mas antes ela pode ja atribuir um valor, tipo uma func ela pode ser invocada antes e criar ela depois

// nome -> nome da variavel/apelido que vai ter algum valor, nesse caso é uma string
// let nome = 'João'
// let nome = 'Henrique'
let nome
nome = 'Henrique'
console.log('o' + nome + ' é dev')

var nomeMaria = 'maria'
console.log(nomeMaria)