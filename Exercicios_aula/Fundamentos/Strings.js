const escola = 'cod3r';

console.log(escola.charAt(4));
console.log(escola.charAt(5) || 'não tem 5 letra');
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('escola '.concat(escola).concat('!'));
console.log(escola.replace(3, 'e'))

console.log('Ana, Maria, Pedro'.split(','))

console.log("__________________________")

//TEMPLATE STRING

const nome = "Rebeca"
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
    console.log(concatenacao, template)

    // EXPRESSOES

    console.log(`1+1 = ${1+1}`)

    const up = texto => texto.toUpperCase()
    console.log(`Ei... ${up('cuidado')}!`)
