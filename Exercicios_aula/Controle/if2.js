function teste1(num) {
  if (num > 7) {
    console.log(num);
    console.log('final');
  }
}

teste1(6);
teste1(8);

console.log('____________________________');

function teste2(num) {
  if (num > 7) console.log(num);

  console.log('final');
}

teste2(6);
teste2(8);

console.log('____________________________');

function teste3(num) {
  if (num > 7); { // cuidado com o ';', não usar nas estruturas de controle
    console.log(num);
  
}
}

teste3(6);
teste3(8);

console.log("____________________________");

function teste4(num) {
  if (num > 7) { 
    console.log(num);
  
}
}

teste4(6);
teste4(8);


