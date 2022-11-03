function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  const comprarTv32 = trabalho1 != trabalho2;
  //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const manterSaudavel = !comprarSorvete; //operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };

  /*
  Pode-se retornar também da seguinte forma, por se tratar de {chave/valor}:
  
  return {
    sorvete: comprarSorvete, 
    compra1: comprarTv50, 
    compra2: comprarTv32, 
    saude: manterSaudavel,
  }
  */
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
