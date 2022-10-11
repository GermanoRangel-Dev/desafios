

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))


const av1 = 9.871
const av2 = 6.871

const total  = av1 * peso1 + av2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // fixa os decimais em 2 casas
console.log(media.toString(2)) // transforma o valor em código binario
console.log(typeof media)// mostra o tipo
console.log(typeof Number)// mostra o Classe 

// ALguns cuidados com os números
console.log("_______________________________")
console.log(7/0.0000001)
console.log(7/0)
console.log("10.4"/2)
console.log("show" *2)
console.log(0.1+0.7)
//console.log(10.toString())
console.log((10.356).toFixed(2))

console.log("_______________________________")

// uso do Math

const raio = 5.6
const area = Math.PI * Math.pow(raio,2)

console.log(area)
console.log(typeof Math)