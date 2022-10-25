console.log("1 - " + typeof console)

console.log("2 - " +Math.ceil(6.1))

const obj1 ={}
obj1.nome = 'bola'
console.log("3 - " +obj1.nome)

function Obj(nome) {
  this.nome = nome
  this.exec = function() {
    console.log("6 - " + 'Exec...')
  }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log("4 - " + obj2.nome)
console.log("5 - " +obj3.nome)
obj3.exec()