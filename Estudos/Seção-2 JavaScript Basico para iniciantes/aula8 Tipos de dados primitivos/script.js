//Dados primitivos: String, number, undefined, null, boolean e symbol

//strings
const NOME = 'Luiz';
const NOME1 = 'Luiz';
const NOME3 = `Luiz`; 
// Number
const num1 = 10; //number
const num2 = 10.52 // number com ponto flutuante
// Undifined e null
let nomeAluno; //variavel não inicializada, com isso ela recebe o valor de undefined = não aponta pra local nenhum na memória
// O null no js é um objeto do js, mas não se enquadra para um objeto
let sobreNomeAluno = null //Nulo = tambem não aponta para local nenhum na memoria

// boleano -> true ou false somente para operacões logicas
const BOOLEAN = true;


// vendo o tipo das variaveis e o valor
console.log(typeof nomeAluno, nomeAluno)

// A e B apontam para o mesmo valor no endereço na memoria, sendo assim quando o array B inserir um valor o A vai ter o mesmo valor inserido no B, isso é um tipo de dado passado por referencia
const a = [1, 2]
const b = a

console.log(a, b)

b.push(3)
console.log(a, b)

// ja aqui, por serem primitivos, ambos tem o valor de 1 e ambos sustenta realmente o seu valor, valores independentes
let a1 = 1
let b2 = a1

console.log(a1, b2)
a1 = 3
console.log(a1, b2)