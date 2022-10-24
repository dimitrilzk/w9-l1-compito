let giocatore1:number = 40; 
let giocatore2:number = 10;
let numeroCasuale:number;
numeroCasuale = Math.round((Math.random() * (100-1)+1));
console.log(numeroCasuale);
function vincitore() {
    if(giocatore1 === numeroCasuale && giocatore2 === numeroCasuale) {
        console.log("Complimenti avete indovinato entrambi!")
    // } else if(giocatore1 !== numeroCasuale && giocatore2 !== numeroCasuale) {
    //     console.log("Mi dispiace nessuno ha indovinato!")
    } else if(giocatore1 !== numeroCasuale && giocatore2 === numeroCasuale) {
        console.log("giocatore2 ha indovinato!")
    } else if(giocatore1 === numeroCasuale && giocatore2 !== numeroCasuale) {
        console.log("giocatore1 ha indovinato!")
    } else if(giocatore1 !== numeroCasuale && giocatore2 !== numeroCasuale) {
        if((Math.abs(giocatore1 - numeroCasuale) < Math.abs(giocatore2 - numeroCasuale))) {
            console.log("Nessuno ha indovinato però giocatore1 si è avvicinato di più!")
        } else {
            console.log("Nessuno ha indovinato però giocatore2 si è avvicinato di più!")
        }
    }
    return
}
console.log(vincitore())
