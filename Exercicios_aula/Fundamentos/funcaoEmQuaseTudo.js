console.log(typeof Object);

class Produto {}
console.log(typeof Produto);

// Em JavaScript quase tudo é function, seria como se JS fosse um país e function o presidente.

// função 1 : Sem Retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 5, 6, 7, 8);
imprimirSoma();

// funcção com retorno

function soma(a, b = 1) {
  return a + b;
}

console.log(soma(20, 3));
soma(2, 3);
console.log(soma(2));

// função 2 : Armazenando uma função em uma variável

const imprimirSoma2 = function (a, b) {
  console.log(a + b);
};

imprimirSoma2(2, 5);

// Armazenando uma função arrow em uma variável
const soma2 = (a, b) => {
  return a + b;
};

console.log(soma2(2, 7));

//retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(4, 2));
