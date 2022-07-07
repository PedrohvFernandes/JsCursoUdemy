const numero = Number(prompt('Digite um número: '));
// numero = Number(numero); caso a variável fosse uma let, poderia mudar o type para number posteriormente

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML += `<p>Seu número -2 é ${numero - 2}</p>`;
texto.innerHTML += `<p>Seu número +2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arrendondado para baixo: ${Math.floor(numero)} </p>`;
texto.innerHTML += `<p>Arrendondado para cima: ${Math.ceil(numero)} </p>`;
texto.innerHTML += `<p>Com duas casas decimais:${numero.toFixed(2)} </p>`;
