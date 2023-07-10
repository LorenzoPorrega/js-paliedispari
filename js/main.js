/*Consegna:

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (una parola che si legge allo stesso modo anche da destra versi sinistra, ad esempio anna, otto)

*/

const userNum = parseInt(prompt("Scegli un numero intero da 1 a 5:"));
const oddOrEven = prompt("Scegli pari o dispari e scrivi la tua scelta:");

function rng (){
    randomNum = (Math.floor(Math.random() * 5) + 1);
    return randomNum;
}

let compRandNum = rng();
console.log(compRandNum);

