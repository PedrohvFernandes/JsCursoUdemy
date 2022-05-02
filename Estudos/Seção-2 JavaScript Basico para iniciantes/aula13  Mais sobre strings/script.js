console.log('\nAspas e barras em string:')
// String são indexadas, o texto é interavel, no caso é um vetor de caracter, cada letra(caracter) tem um index
let umaString = `Um texto`//u[0]m[1] [2]t[3]
console.log(umaString)
// O js disponibiliza alguma coisas pra trbalhar com a string
// Por exemplo colocar aspas duplas
umaString = `Um "texto"`

console.log(umaString)

// Escapando o caracter de aspas duplas de uma string, a barra invertida é um caracter de escape 
umaString = "Um \"texto\""
console.log(umaString)

// Dessa forma da errado, dessa forma o t vira um tab
let umaOutraString = "Um outro \texto"
console.log(umaOutraString)

// uma é de escape a outr é a barra
umaOutraString = "Um outro \\texto"
console.log(umaOutraString)

console.log('\nIndex Normal:')
// Vendo o index especifico de um caracter
                  // 01234567
let umaStringNova = "Um texto"
console.log(umaStringNova[4]) //e
console.log(umaStringNova[8]) //Undefined
console.log(umaStringNova[-1]) // Undefined

console.log('\nIndex com charAt:')
// Outra função pra pegar o index dos caracteres -> charCode
// O js libera uma interface(contratos) na string para manipular essa string, é so colocar um . apos a variavel da string, no caso isso são metodos
// da class e obejeto string, no caso do JS a String é reconhecida como objeto que supostamente vem de uma class tipo no Java e nesse objeto contem metodos, que podem ser chamado por um ponto
// O objeto global String  é um construtor para strings, ou uma sequência de caracteres. https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(umaStringNova.charAt(6))//t
console.log(umaStringNova.charAt(8))//não tem erro e sim um valor vazio

console.log('\nConcatenaçaão:')
console.log(umaStringNova.concat(' ', ' um texto em um lindo dia', ', uma linda manhã'))//concatenação
console.log(umaStringNova + 'um texto em um lindo dia, uma linda manhã')
console.log(`${umaStringNova} em um lindo dia`)

console.log('\nIndex com indexOf:')
// Em qual indice começa a palavra texto
console.log(umaStringNova.indexOf('texto'))//indice 3
console.log(umaStringNova.indexOf('Texto'))//-1 não encontrou nada

// tem esse indice depois desse ?
// Nesse caso tem um o depois do indice 3 ?
console.log(umaStringNova.indexOf('o', 3))//7

console.log(umaStringNova.indexOf('t', 1))//3

console.log('\nIndex com lastIndexOf:')
// Começa do final para tras
console.log(umaStringNova.lastIndexOf('o'))//7

// Aqui ele ja não acha o "o"
console.log(umaStringNova.lastIndexOf('o', 3))

console.log('\nTem Regex no replace, match e search:')
console.log('\nMatch:')
// Expressoes regulares(regex) match, replace e search
// Achar letras minusculas usando a flag g
// g é para pesquisa global. Ou seja, corresponderá a todas as ocorrências. Você geralmente também verá io que significa ignorar maiúsculas e minúsculas.

// Referência: global - JavaScript | MDN https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/regexp/global

// O sinalizador "g" indica que a expressão regular deve ser testada em relação a todas as correspondências possíveis em uma string.

// Sem o g sinalizador, ele testará apenas o primeiro.

// O array so foi encontrado porque ele usa a flag g
console.log(umaStringNova.match(/[a-z]/g))

// Sem a flag g, a diferença so esta quando voce manda ou não a flag
console.log(umaStringNova.match(/[a-z]/))

console.log('\nSearch:')
// Ele retorna pra mim a primeira letra minuscula
console.log(umaStringNova.search(/[a-z]/))

// Não faz tanta diferença pois ele sempre vai retornar somente um
console.log(umaStringNova.search(/[a-z]/g))

console.log(umaStringNova.search(/x/))

console.log('\nReplace:')
// O replace ele necessariamente não precisa expressão regular 
// Se eu quiser substituir uma determinada pavra por outra eu posso
console.log(umaStringNova.replace('Um','Outra palavra'))

// Usando expressão regular
console.log(umaStringNova.replace(/Um/,'Outra palavra'))

let textoMaior = 'O rato roeu a roupa do rei de roma.'

console.log(textoMaior.replace(/r/,'#'))

// Quero que ele faça isso repetidamente, usando a flag g porque a g quer dizer global, repetindo em todos os r
console.log(textoMaior.replace(/r/g,'#'))

console.log('\nTamanho:')
// Tamanho da string, length não é uma função e sim um atributo da string
console.log(textoMaior.length)

// Indeice:   012345678910
// Tamanho:    1234567891011
textoMaior = 'O rato roe.'
console.log(textoMaior.length)


textoMaior = 'O rato roeu a roupa do rei de roma.'
console.log('\nSlice:')
// Quero pegar a palavra exata, no caso o Slice ele fatia de um ponto ate o outro que eu definir
console.log(textoMaior.slice(2, 5))//rat
// Eu sempre tenho que pegar sempre um a mais do fim que eu quero
console.log(textoMaior.slice(2, 6))//rato

// Utilizando negativos, no caso é quantidade de caracteres totais -(subtrair) a quantidade que eu pedi pra pegar
console.log(textoMaior.slice(-3))//ma.


// pegando roma
console.log(textoMaior.slice(-5))

// pegando roma com um final, tirando o ponto
console.log(textoMaior.slice(-5, textoMaior.length -1))

// do r ate o .  mas nesse caso ponto sai, porque ele é o final que eu determinei
console.log(textoMaior.slice(-5, -1))

console.log('\nSubstring:')
console.log(textoMaior.substring(textoMaior.length - 5))

console.log(textoMaior.substring(textoMaior.length - 5, textoMaior.length -1))

// Dividindo a string em todos os espaços, nesse caso eu pego todas as palavras separadsa e agrupadas no array 
console.log('\nDividindo a string com cada palvra')
console.log(textoMaior.split(' '))
console.log(textoMaior.split('r'))

// Colocando limite so com 2 vezes
console.log(textoMaior.split(' ', 2))

// MDN, w3school e ECMAScript(Aqui é complexo) -> documentações

console.log('\nDeixar Maisculo e minusculo')
// Deixar tudo maiusculo
console.log(textoMaior.toLocaleUpperCase())

// Minusculo
console.log(textoMaior.toLocaleLowerCase())