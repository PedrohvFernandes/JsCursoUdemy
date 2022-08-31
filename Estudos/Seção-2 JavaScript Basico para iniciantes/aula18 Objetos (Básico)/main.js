// Diferença const e let:

// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz'
// console.log(array)
// // array = 'Outra' Isso que não pode ser feito pois aqui nesse caso eu estaria reatribuindo meu array e com const não pode fazer isso

// let a = [1, 2, 3];
// a.push(4);
// a[0] = 'Luiz'
// console.log(a)
// a = 'Outra'

// Objetos

// Se fosse fazer objetos de pessoas com variaveis relacionadas entre si, teria que fazer isso, uma especie de grupo
const nome01 = 'Luiz'
const sobrenome01 = 'Miranda'
const idade01 = 25

const nome02 = 'Pedro'
const sobrenome02 = 'Henrique'
const idade02 = 20

// Objeto literal:
const pessoa1 = {
  // Atributos
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 25
}

console.log(pessoa1.nome)

const pessoa2 = {
  nome: 'Pedro',
  sobrenome: 'Henrique',
  idade: 20
}

console.log(pessoa2.nome)

// Função que cria um objeto:
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  }
}

// Passando os parametros
const pessoa3 = criaPessoa('luiz', 'miranda', 25)
console.log(pessoa3)

// Função que cria um objeto simplificado: porque quando temos chaves iguais, o propio JS ja sabe o que que tem que criar, por exemplo nome, seria a chave nome
function criaPessoa2(nome, sobrenome, idade) {
  return {
    nome,
    sobrenome,
    idade
  }
}
const pessoa4 = criaPessoa('pedro', 'lucas', 25)
console.log(pessoa4)



const pessoa40 = {
  nome: 'Lucas',
  sobrenome: 'Henrique',
  idade: 20,

  fala () {
    console.log('esta falando')
  }
}

pessoa40.fala()



// Palavra this --> Dentro do objeto existe uma plavra chamada this, eu posso referenciar esse objeto e qualquer atributo desse objeto dentro do metodo do objeto.
// O this significa este objeto nesse contexto 

const pessoa45 = {
  nome: 'Lucas',
  sobrenome: 'Henrique',
  idade: 20,

  fala () {
    console.log(`${this.nome} esta falando`)
  },

  incrementaIdade(){
    ++this.idade
    console.log(this.idade)
  }
}

pessoa45.fala()
pessoa45.incrementaIdade()
pessoa45.incrementaIdade()
pessoa45.incrementaIdade()