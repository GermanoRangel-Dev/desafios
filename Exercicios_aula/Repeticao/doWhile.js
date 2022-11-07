// esta estrutura garante que ao menos uma vez ela execute o laço de repeticao

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

do {
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`); // concatenar com ${}, usa-se a crase ao invés de acento agudo!
} while (opcao != -1);

console.log('Até a próxima!');
