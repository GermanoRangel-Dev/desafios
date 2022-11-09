const soma = function(x,y){
  return x+y

}

const imprimirResultado = function(a,b, operacao = soma){
  console.log(operacao(a,b))
}

imprimirResultado(3,2)
imprimirResultado(3,2, soma)
imprimirResultado(3,2, function(x,y){
  return x-y
})
imprimirResultado(3,2, (x,y) => x*y)

console.log('________________________')

const pessoa = {
  falar: function(){
    console.log('Opa')
  }
}

pessoa.falar()