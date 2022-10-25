// desestruturar por array

const [a] = [10]
console.log('1- ' + a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log('2- ' + n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log('3- ' + nota)
