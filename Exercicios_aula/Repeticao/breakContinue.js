// evite sempre usar estas palavras reservadas break e continue pois pode desviar o fluxo causando problemas no seu código

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in numeros) {
  if (x == 5) {
    break; // para a repetição
  }
  console.log(`${x} = ${numeros[x]}`);
}

console.log('____________________________');

for (y in numeros) {
  if (y == 5) {
    continue; // pula o valor e dá continuidade a partir do próximo
  }
  console.log(`${y} = ${numeros[y]}`);
}

externo: for (a in numeros) {
  for (b in numeros) {
    if (a == 2 && b == 3) break externo;
    console.log(`Par = ${a}, ${b}`);
  }
}
console.log('Fim');


// NÃO USE!!!!!!!!!