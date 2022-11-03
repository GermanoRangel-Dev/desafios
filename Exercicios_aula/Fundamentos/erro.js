function tratarErroELancar(erro){
  //throw new Error('Erro de teste')
  throw{
    nome: erro.name,
    msg:erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj){
  try{
  console.log(obj.name.toUpperCase() + '!!!')
  }catch (e){
    tratarErroELancar(e)
  }finally{
    console.log('final')
  }
}

const obj = {name: 'Roberto'} // teste os dois
//const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)