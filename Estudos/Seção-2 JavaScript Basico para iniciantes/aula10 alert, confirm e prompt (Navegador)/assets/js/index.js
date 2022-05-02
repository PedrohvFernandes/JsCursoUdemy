// Uma função de alerta
alert('Nossa Mensagem')

console.log(`alguma coisa`)

//o alert é um atalho para window.alert
window.alert(`outra mensagem`)

// confirm -> tem certeza de quer fazer isso ?
let confirma = window.confirm(`quer mesmo fazer isso`)
console.log(confirma)

let nome = window.prompt(`Captura algum dado`)
console.log(nome)

// Abreviação
alert(``)
confirm(``)
prompt(``)

// Eles podem retornar valores o confirm(boolean) e o prompt(dados inseridos)
let confirmaPraMim = confirm("Quer mesmo apagar?")
if(confirmaPraMim === true){
  alert(`Foi apagado :)`)
}else{
  alert(`Não foi apagado`)
}


let num1 = prompt(`Digite um número`)
alert(num1)
let num2 = prompt(`Digite outro número`)
alert(num2)
alert(`A SOMA É sem o parseInt: ` + num1 + num2)
alert(`A SOMA É: ` + (parseInt(num1) + parseInt(num2)))

let num3 = parseInt(prompt(`Digite outro número`))
alert(num3 + parseInt(num1))