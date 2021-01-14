// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. Dopo che
// sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var arrayNumeri = [];
var numeroInput;
var arrayInput = [];
// array di 5 numeri
while (arrayNumeri.length < 5) {
  var numero = generaRandom(0, 99);
  if (arrayNumeri.includes(numero)) {
    numero = generaRandom(0, 99);
  }
  else {
    arrayNumeri.push(numero);
  }
}
console.log(arrayNumeri);
alert(arrayNumeri);
// richiesta numeri
setTimeout(function() {
  for (var i = 0; i < 5; i++) {
    numeroInput = parseInt(prompt('Inserisci numero'));
    if (arrayNumeri.includes(numeroInput)) {
      arrayInput.push(numeroInput);
    }
  }
  console.log('hai indovinato ', arrayInput.length,' numeri e sono', arrayInput);
}, 3000);
// ****FUNZIONI****
function generaRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
