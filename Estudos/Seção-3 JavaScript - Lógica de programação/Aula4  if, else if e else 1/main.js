/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho, sem os else
// Sempre que usar o else, precisa de um if antes
// Else if pode ser usado quantas vezes quiser na checagem
// So posso ter um else na checagem, pois ele é o ultimo caso
// Condições não são exclusivas
// Podemos usar condições sem else if, usando apenas if e else

// Obs: no js temos um objetos para trabalhar com datas, o objeto Date, que nele vem as horas
const hora = 19

// Se isso acontecer, execute o bloco de código
if (hora <= 12) {
  console.log('Bom dia')
}
// Se não, ele checa outro if e se isso acontecer, execute o bloco de código
else if (hora >= 12 && hora <= 18) {
  console.log('Boa tarde')
}
// Se não, ele checa outro if e se isso acontecer, execute o bloco de código
else if (hora >= 18 && hora <= 23) {
  console.log('Boa noite')
}
// Se nada disso acontecer, execute o bloco de código
else {
  console.log('OLÁ')
}

const tenhoGrana = true

if (tenhoGrana) {
  console.log('Vou sair de casa')
} else {
  console.log('Não vou sair de casa')
}

if (tenhoGrana) {
  console.log('Vou sair de casa')
} else if(!tenhoGrana) {
  console.log('Não vou sair de casa')
}