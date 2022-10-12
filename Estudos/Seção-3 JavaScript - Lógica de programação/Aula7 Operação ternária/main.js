// ? : --> Operador ternário, que substitui o if/else

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário normal');
}

// Operador ternário
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);


// Valor padrão
const corUsuario = null;
// Variavel padrão, porque informalmente a gente esta setando um valor padrão. Checando a variavel corUsuario, se ela for nula, então seta a cor padrão. O nome disso é fallback. Ou seja a corPadrao vai sempre ter um valor padrão. Isso pode ser interessante para quando você não tem certeza se a variavel vai ter um valor ou não, caso o usuario não selecione uma cor para ele por exemplo.
const corPadrao = corUsuario || 'Preta';
console.log(corPadrao);