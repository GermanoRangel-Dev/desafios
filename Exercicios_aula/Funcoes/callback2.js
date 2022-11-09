const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem usar o callback

const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

console.log('_________________________');

// Com callback

const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasBaixas2);

console.log('_________________________');

//com calback & arrow function

const notasMenorQueSete = nota => nota < 7;  /* apenas para dar mais elegância no código, pois poderia usar o que vem depois do acréscimo dentro do próprio parentes abaixo "notas.filter(AQUI DENTRO PODERIA POR ..nota => nota < 7..)"*/
const notasBaixas3 = notas.filter(notasMenorQueSete);
console.log(notasBaixas3);
