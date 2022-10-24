let giocatore1:number = 7; 
let giocatore2:number = 35;
let numeroCasuale:number;
numeroCasuale = Math.round((Math.random() * (100-1)+1));
console.log(numeroCasuale);
function vincitore() {
    if(giocatore1 === numeroCasuale || giocatore2 === numeroCasuale) {
        console.log("Complimenti hai indovinato!")
    } else if(giocatore1 !== numeroCasuale || giocatore2 !== numeroCasuale) {
        console.log("Mi dispiace non hai indovinato!")
    }
    return
}
console.log(vincitore())