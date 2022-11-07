// serve para quantidade indeterminada de repetições de vezes

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`); // concatenar com ${}, usa-se a crase ao invés de acento agudo!
}

console.log('Até a próxima!');
