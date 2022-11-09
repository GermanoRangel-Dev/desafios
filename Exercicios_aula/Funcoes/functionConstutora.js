function Carro(velocidadeMaxima = 200, delta =5){
  // atributo privado
  let velocidadeAtual = 0

  // metodo público
  this.acelerar = function(){
    if(velocidadeAtual + delta <= velocidadeMaxima){
      velocidadeAtual += delta
    }else{
      velocidadeAtual = velocidadeMaxima
    }
      
  }

  // metodo publico
  this.getVelocidadeAtual = function(){
    return velocidadeAtual
  }
}

const uno = new Carro
uno.acelerar()
console.log("Uno:" + uno.getVelocidadeAtual())

const ferrari = new Carro(350, 10)
ferrari.acelerar()
console.log("Ferrari:" + ferrari.getVelocidadeAtual())

const bugatti = new Carro(350, 100) // a máxima se restringe ao valor inicial entre parenteses
bugatti.acelerar()
bugatti.acelerar()
bugatti.acelerar()
bugatti.acelerar()

console.log("Bugatti:" + bugatti.getVelocidadeAtual())

console.log("Carro é: " + typeof Carro)
console.log("ferrari é: " + typeof ferrari)
