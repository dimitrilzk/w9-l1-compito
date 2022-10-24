"use strict";
let giocatore1 = 7;
let giocatore2 = 35;
let numeroCasuale;
numeroCasuale = Math.round((Math.random() * (100 - 1) + 1));
console.log(numeroCasuale);
function vincitore() {
    if (giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
        console.log("Complimenti hai indovinato!");
    }
    else if (giocatore1 !== numeroCasuale || giocatore2 !== numeroCasuale) {
        console.log("Mi dispiace non hai indovinato!");
    }
    return;
}
console.log(vincitore());
