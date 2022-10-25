// novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 24,
  endereco: {
    logradouro: 'Rua paraiba do sul',
    numero: 27,
  }
}

const { nome, idade } = pessoa
console.log('1- ' + nome,idade)

const { nome: n, idade: i } = pessoa
console.log('2- ' + n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log('3- ' + sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log('4- ' + logradouro, numero, cep)