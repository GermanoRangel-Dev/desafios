let a = 123;
let b = 234;
global.b = 345;
this.c = 456;
this.d = false;
this.e = 'teste';

console.log(a);
console.log(b);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);


// criando uma variavel sem var nem let => não faça isso!
abc = 3;
console.log(global.abc)

// sempre evite o escopo global sempre que possível use o const.