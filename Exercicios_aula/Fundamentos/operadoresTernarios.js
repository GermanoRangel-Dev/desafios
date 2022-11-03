

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))

/*
Caso não queira usar a função Arrow, pode-se fazer:

const resultado = nota {
  return nota >=7 ? 'Aprovado' : 'Reprovado'

} 
*/
