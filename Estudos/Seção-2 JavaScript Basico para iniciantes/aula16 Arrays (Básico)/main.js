console.log('Acessando a posicão do valor da String: \n')

// As string são indexadas por valor  0123456789
const nomeDaPessoa =                 'João Pedro';
console.log('Nome da pessoa: ',nomeDaPessoa, '\n');
// Acessa o valor da posição 0
console.log('Primeira Letra da pessoa',nomeDaPessoa[0]);
console.log('Ultima Letra da pessoa',nomeDaPessoa[9], '\n');


// Arrays:
console.log('Acessando posições dos arrays: \n')
// No js pode colocar qualquer coisa dentro do array, ele não tem limite de tamanho e nem de tipo(ele não é altamente tipado) e isso não é uma boa pratica
const array = ['Pedro','João','Luiz','Maria','Paulo', 1, true, null];

// Os arrays são indexados tambem, mas por elemento    0        1       2       3         4
const alunos =                                      ['Pedro', 'João', 'Luiz', 'Maria', 'Paulo'];
console.log(alunos);
// Cada indice do array representa um elemento que tem o seu valor
console.log('Primeiro nome dos alunos',alunos[0]);
console.log('Ultimo nome dos alunos',alunos[4]);


// Editando valores do array
console.log('Alunos antes da edição',alunos);
alunos[0] = 'Eduarda';
console.log('Alunos depois da edição',alunos);

// Inserindo no fim do array:

// Colocando um valor a frente do ultimo indice com o tamanho fixo do array
alunos[5] = 'Amora';
console.log('Alunos depois da inserção no final com o tamanho fixo do array',alunos);


// Colocando um valor a frente do ultimo indice dinamicamente de acordo com o tamanho(length) do array
alunos[alunos.length] = 'Jose';
alunos[alunos.length] = 'Lucas';
alunos[alunos.length] = 'Amelia';
console.log('Alunos depois da inserção no final dinamicamente usando length',alunos);


// Tem uma função que faz a inserção dinamicamente sem o length
alunos.push('Otavio');
alunos.push('Luana');
alunos.push('Fabiano');
console.log('Alunos depois da inserção no final dinamicamente com push',alunos);


// Inserindo no inicio do array:

alunos.unshift('Iara');
alunos.unshift('Pedro');
console.log('Alunos depois da inserção no inicio dinamicamente com unshift',alunos);


// Removendo do array:

// Removendo o ultimo elementos do array
alunos.pop();
console.log('Alunos depois da remorção do ultimo elemento dinamicamente com pop',alunos);


// Removendo o ultimo elementos do array e salvando o valor do elemento removido, que nesse caso é a luana
const ultimoAluno = alunos.pop();
console.log('Alunos depois da remorção do ultimo elemento dinamicamente com pop',alunos);
console.log('Ultimo aluno removido',ultimoAluno);


// Removendo o primeiro elementos do array:
const primeiroAluno = alunos.shift();
console.log('Alunos depois da remorção do primeiro elemento dinamicamente com shift',alunos);
console.log('Primeiro aluno removido',primeiroAluno, 'Agora a Iara é a primeira posiçao do array');


// Removendo sem perder os indices: no caso a Iara, criando um undefined
console.log('Aluno da primeira posição que sera removido, mas sem perder o indice:',alunos[0]);
const alunoRemovido = delete alunos[0];
console.log(alunos);
console.log('Aluno removido sem perder o indice?',alunoRemovido);

// Inserindo novamente na posição 0
alunos[0] = 'Iara';
console.log('Aluno que foi removido, sendo inserido novamente',alunos);

// Acessando posições que não existem no array:
console.log('Acessando posições que não existem no array: ',alunos [50]);


// Fatiando o array, do elemento 0 ao elemento 2

alunos.push('Fulano');
alunos.push('Ciclano');
alunos.push('Beltrano');

// 0 e 3 porque o 3 não é incluído, ou seja o 3 é o ultimo elemento
console.log('Fatiando o array do 0 ao 2: ',alunos.slice(0, 3));

// Outra maneira de fatiar o array: excluindo sempre o ultimo
console.log('Fatiando o array com numero negativo: ',alunos.slice(0, -1));

// Array no js é um object automaticamente indexado e o objeto é tipo um array so que não automaticamente indexado
console.log('Array no js é um object: typeof de alunos: ',typeof alunos);

// Se eu quiser saber realmente se eu estou trabalhando com um array: true
console.log('Array no js é um object: alunos instanceof Array: ',alunos instanceof Array);

