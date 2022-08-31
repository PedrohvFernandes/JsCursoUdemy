let contador = 0
const arrayPessoas = []

const form = document.querySelector('#forms')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  let nome = document.getElementById('User').value
  let sobrenome = document.getElementById('Sobrenome').value
  let peso = document.getElementById('Peso').value
  let altura = document.getElementById('Altura').value

  if (validaCampos(nome, sobrenome, peso, altura)) {
    error.innerHTML = ' '
    error.innerHTML += validaCampos(nome, sobrenome, peso, altura)
  } else {
    error.innerHTML = ' '
    infoUser.innerHTML += maquinaDeObjetos(nome, sobrenome, peso, altura)
  }
})

function validaCampos(nome, sobrenome, peso, altura) {
  if (!nome.trim() || !sobrenome.trim() || !peso.trim() || !altura.trim()) {
    return 'Algum campo esta vazio!!!'
  }
}

function maquinaDeObjetos(nome, sobrenome, peso, altura) {
  arrayPessoas.push({
    nome,
    sobrenome,
    peso,
    altura
  })

  console.log(arrayPessoas)
  return `${++contador} pessoa: ${nome} ${sobrenome} ${peso} ${altura}. `
}
