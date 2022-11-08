let dobro = function (a) {
  return 2 * a;
};

dobro = a => {
  return 2 * a;
};

dobro = a => 2 * a; // return implícito
console.log(dobro(Math.PI))

console.log('_____________________')

let ola = function(){
  return 'Olá'
}

ola = () => 'Olá' // forma melhor de utilizar
ola = _ => 'Olá'
console.log(ola())
