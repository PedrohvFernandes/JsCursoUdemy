// Objeto Math -> matematica

let num1 = 9.54578;

// Arredondar o numero para baixo:
let num2 = Math.floor(num1);
console.log('floor: ',num2);

// Arrendonda pra cima
let num3 = Math.ceil(num1);
console.log('ceil: ',num3);

// Ele arrendonda pro mais proximo
let num4 = Math.round(num1);
console.log('round: ',num4);

// Achar o maior dentre eles
let num5 = Math.max(1,2,3,4,-10,5,20,1,0,-50,1500,9,8,7,6,5,4,3,2,1);
console.log('max: ',num5);

// Achar o menir dentre eles
let num6 = Math.min(1,2,3,4,-10,5,20,1,0,-50,1500,9,8,7,6,5,4,3,2,1);
console.log('min: ',num6);

// gerar numeros aleatorios de 0 a 1
let num7 = Math.random();
console.log('random: ',num7);

// gerar numeros aleatorios entre tal casa a outra casa, aqui é entre 10 e 5
let num8 = Math.random() * (10 - 5) + 5;
console.log('random entre 10 e 5: ',num8);

// let num9 = Math.round(Math.random() * (10 - 5) + 5);
let num9 = Math.round(num8);
console.log('random entre 10 e 5 arredondado: ',num9);

// Math de pi
let num10 = Math.PI;
console.log('pi: ',num10);

// Potenciação
let num11 = Math.pow(2, 10);
console.log('potenciação: ',num11);
console.log('potenciação usando operador de atribuição(Atribuição exponencial): ', 2 ** 10);

// Raiz quadrada
let num12 = Math.sqrt(144);
console.log('raiz quadrada sqrt: ',num12);
// Maneira tradicional
let num13 = 144 ** (1/2);
console.log('raiz quadrada tradicional: ',num13);
// Outra maneira
let num14 = 144 ** 0.5;
console.log('raiz quadrada tradicional outra maneira: ',num14);


// EM JS PODE DIVIDIR POR 0, não da erro, mas gera o infinity, avaliado como verdadeiro, quanto mais a gente se aproxima do 0 absoluto a gente aumenta mais o nosso valor chegando no infinity (infinito), ou seja a memoria não é suficiente para armazenar o valor.
console.log(100 / 0);


