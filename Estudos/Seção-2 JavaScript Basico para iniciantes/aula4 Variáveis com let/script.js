// Ordem de execução do motor do JS:
// De cima pra baixo e da esquerda pra direita, e o que não for executado ele espera ser executado para dar continuidade, tipo um alert se esse alert não for clicaco no ok ele não deixa terminar o navegador de carregar o codigo
// E se um trecho de codigo precisa de alguma ação(callback) pra ser executado tipo um evento(click, etc) ou algum dado, ele pula esse trecho e da continuidade no codigo executando as outras coisas
// E essa ordem tambem se aplica para o HTML e CSS de cima para baixo, por isso o style no html fica no metadados e o scipt no final ou depois da tag de fechamento do body, pra não ter erro de carregar a pagina 
console.log("Script!!!");
console.log("Script!!!");
console.log("Script!!!");
console.log("Script!!!");
console.log("Script!!!");

// Variavel -> valor ne algum endereço na memoria
//  variavel -> algo que pode ser alterado durante o codigo -> let e var
// contantes -> não pode ser alterado, ela tem um valor constante -> const

let nomeScript = "Script!!!";
console.log(nomeScript);

// Hoje a gente usa mais o let em vez do var, pois o var ele tem um escopo geral, qual quer funcção pode acessar ela, enquanto o let somente aquele bloco de codigo
// Com isso var não tem segurança nem uma. Com var é possivel fazer hoisting https://developer.mozilla.org/pt-BR/docs/Glossary/Hoisting tipo uma função
// Isso quer dizer que ela pode ser inicializada depois mas antes ela pode ja atribuir um valor, tipo uma func ela pode ser invocada antes e criar ela depois
// A var pode ser redeclarada, enquanto a let e a const não pode
// a var e o let podem ser inicializadas vazias ou ja com valores ou posteriormente atribuir algum valor para elas

// nome -> nome da variavel/apelido que vai ter algum valor, nesse caso é uma string
// let nome = 'João'
// let nome = 'Henrique'
let nome; // Declarou a variavel
nome = "Henrique"; // ela pode atribuir qualquer valor, nesse caso estamos inicializando a variavel
console.log("o" + nome + " é dev");

nome = "João"; // reatribuindo outro valor
console.log("o" + nome + " é dev");

var nomeMaria = "maria";
console.log(nomeMaria);

// não pode criar variaveis com palavras reservadas da lingugagem
//let let

// As variaveis precisam ter nomes significativos, para facilitar no entendimento
let nomeCliente = "João";
console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número, não pode ter espaços, nem traços -
// Pode usar os estilos camelCase ou snake_case

let nome_cliente;
let nomePessoas;

// Case-sensitive -> letras maiusculas e minusculas tem diferença pro motor do js

// Não podemos redeclarar variaveis com let ou const, somente com var

// Não utilize VAR, UTILIZE LET
