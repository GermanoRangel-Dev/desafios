const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado!');
  } else {
    console.log('Reprovado!');
  }
};

imprimirResultado(10);
imprimirResultado(5);
imprimirResultado('epa'); // cuidado!!! O JS passa qualquer tipo de dado caso não seja especiificado.
