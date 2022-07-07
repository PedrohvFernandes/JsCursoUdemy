//IEEE 754-2008

let num1 = 100; // number
let num2 = 2.5; // number

// Aqui é realizado uma soma
console.log(num1 + num2)

// Se qualquer um desses numeros forem uma string não é realizado uma conta e sim uma concatenação(junção). Lembrando que o num foi convertido temporariamente para string
console.log(num1.toString() + num2)

let num1Convertido = num1.toString()
console.log(typeof num1)
console.log(typeof num1Convertido)

let num1ConvertidoEmBinario = num1.toString(2);
console.log(num1ConvertidoEmBinario)


//Arredondando o valor, sumindo com as demais casas decimais, deixando so duas
let num3 = 10.75869597867777;
console.log(num3.toFixed(2));


// Saber se o valor é inteiro ou decimal recebendo de uma conta, de uma base de dados
let num4 = 10
let num5 = 5.5;
// O isInteger é um metodo que retorna true ou false se o valor é inteiro ou não
console.log(Number.isInteger(num4))
console.log(Number.isInteger(num5))

// NaN -> Not a Number
let temp = num1 * 'Olá'
// Eu pergunto pro js se ele é um numero invalido ou não
console.log(Number.isNaN(temp))

// Imprecisões de numeros no js:

let num6 = 0.7
let num7 = 0.1
console.log(num6 + num7);

num6 += num7 // num6 = num6 + num7  //0.8
console.log(num6)
num6 += num7 //0.9
console.log(num6)
num6 += num7 //1.0, ou seja esta tendo uma certa imprecisão
console.log(num6)

// Posso "resolver" usando o metodo toFixed, deixando ele arrendondado aos nossos olhos
num6 = num6.toFixed(2);
console.log(num6);

// Mas o isInteger fala que isso não é inteiro, pois por traz dos panos ele verifica o binario
console.log(Number.isInteger(num6))

// 1-Para resolver isso, podemos usar os metodos parseInt, Number, ou parseFloat, dessa forma é um numero real tanto aos nossos olhos(toFixed) quanto para maquina(metodos parseInt, Number, ou parseFloat)
num6 = parseInt(num6);
console.log(num6);
console.log(Number.isInteger(num6));

// 2- Maneira para resolver isso, sem nem uma função e usar calculo:
let num8 = 0.7
let num9 = 0.1

// Pra retirar essa imprecisão com calculo, a gente pode multiplicar vezes 100 pra arrendondar o valor e depois dividir por 100
num8 = ((num8 * 100) + (num9 * 100))/100  //0.8
num8 = ((num8 * 100) + (num9 * 100))/100  //0.9
num8 = ((num8 * 100) + (num9 * 100))/100  //1.0
console.log(num8)









