 // contexto léxico 1 = local onde sua variável 
 //foi definida fisicamente 
 const saudacao = 'Opa';

 function exec(){
  const saudacao = 'falaaa'; // conttexto léxico 2
  return saudacao;
 }

 // Objetos são grupos aninhados de pares nome/valor
 const Cliente = {
  nome: 'pedro',
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: 'Rua especial',
    numero: 121
  }
 }

 console.log(saudacao)
 console.log(exec())
 console.log(Cliente)