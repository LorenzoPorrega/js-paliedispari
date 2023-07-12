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

const getUserNum = document.querySelector(".number");
let userNum = getUserNum.value;

const getUserChoice = document.querySelector(".user-choice");
let userChoice = getUserChoice.value;

const button = document.querySelector(".btn")
const mainContainer = document.querySelector(".container");

button.addEventListener('click', function (){

    mainContainer.innerHTML = "";

    console.log("User given number: " + userNum);
    mainContainer.innerHTML += (`<div class="row mb-4">
                                    <span class="fs-3">Numero scelto dall'utente: <span class="fs-3 fw-bold">${userNum}</span></span>
                                </div>`);
    console.log("User choice over odd (dispari) or even (pari): " + userChoice);
    mainContainer.innerHTML += (`<div class="row mb-4">
                                    <span class="fs-3">Scelto dispari o pari: <span class="fs-3 fw-bold">${userChoice}</span></span>
                                </div>`);

    function rng (){
        randomNum = (Math.floor(Math.random() * 5) + 1);
        console.log(randomNum);
        return randomNum;
    }
    
    let computerRandomNumber = rng();
    console.log("Randomly generated number for computer: " + computerRandomNumber);
    mainContainer.innerHTML += (`<div class="row mb-4">
                                    <span class="fs-3">Numero randomicamente generato dal computer: <span class="fs-3 fw-bold">${computerRandomNumber}</span></span>
                                </div>`);

    const sum = parseFloat(userNum[0]) + computerRandomNumber;
    console.log(`Sum of user given number (${userNum}) + computer randomly generated number (${computerRandomNumber}): ${sum}`);
    mainContainer.innerHTML += (`<div class="row mb-4">
                                    <span class="fs-3">Somma del numero scelto dall'utente (${userNum}) + il numero generato per il computer (${computerRandomNumber}): <span class="fs-3 fw-bold"> ${sum}</span></span>
                                </div>`);

    function sumCheck(sum){
        let sumCheck = "";
        if(sum % 2 === 0){
            sumCheck = "pari";
        }
        else{
            sumCheck = "dispari"
        }
        return sumCheck;
    }

    let evenOddSum = sumCheck(sum);
    console.log("The sum is: " + evenOddSum);
    mainContainer.innerHTML += (`<div class="row mb-4">
                                    <span class="fs-3">La somma è: <span class="fs-3 fw-bold">${evenOddSum}</span></span>
                                </div>`);

    function result(userChoice, evenOddSum){
        let result = "";
        if(evenOddSum = "pari"){
            if(userChoice = "pari"){
                result = "win";
                console.log("Hai vinto!")
            }
            else if (userChoice = "dispari"){
                console.log("Hai perso..")
                result = "lost";
            }
        }
        else if (evenOddSum = "dispari"){
            if(userChoice = "dispari"){
                result = "win";
                console.log("Hai vinto!")
            }
            else if (userChoice = "pari"){
                console.log("Hai perso..")
                result = "lost";
            }
        }
        return result;
    }
    let wonOrLost = result(userChoice, evenOddSum);
    console.log(wonOrLost);

    if(wonOrLost = "win"){
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-1 fw-bold">HAI VINTO!</span>
                                    </div>`);
    }
    else{
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-1 fw-bold">SFORTUNATAMENTE HAI PERSO..</span>
                                    </div>`);
    }
});

/*
let wonOrLost = result(oddOrEven, evenOddSum);
console.log(result);
*/