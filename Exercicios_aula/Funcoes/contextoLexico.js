const valor = 'Global'

function minhaFuncao(){
  console.log(valor)
}

function exec(){
  const valor = 'Local'
  minhaFuncao()
}
exec()

// de acordo com o exemplo acima, a resposta aparecerá Global, pois a função carrega consigo o valor onde ela foi definida e não onde ela será chamada.