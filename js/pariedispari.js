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

//Here I establish some variable to grab DOM content
const getUserNum = document.querySelector(".number");
const getUserChoice = document.querySelector(".user-choice");
const button = document.querySelector(".btn")
const mainContainer = document.querySelector(".container");

//Here I add an addEventListener for when the play button is pressed
button.addEventListener('click', function (){
    //Here I get the user given number and odd or even choice from the form selects
    const userNum = getUserNum.value;
    const userChoice = getUserChoice.value;
    console.log(userNum, userChoice)
    
    /*Here I establish an if block to block the game function if the default
    selects' value are selected instead of user's custom selected values*/
    if(userChoice === "Selezione una delle due scelte" || userNum === "Scegli.."){
        return;
    }
    else{
        //I delete the main container html content to then populate if with the game results
        mainContainer.innerHTML = "";
        //Here I console- and DOM-print the userChoice and userNum
        console.log("User given number: " + userNum);
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-3 fw-bold">Numero scelto dall'utente: <span class="fs-1 fw-bold">${userNum}</span></span>
                                    </div>`);
        console.log("User choice over odd (dispari) or even (pari): " + userChoice);
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-3 fw-bold">Scelto dispari o pari: <span class="fs-1 fw-bold">${userChoice}</span></span>
                                    </div>`);
        //Here I create a function to get a random integer from 1 to 5 for the PC
        function rng (){
            randomNum = (Math.floor(Math.random() * 5) + 1);
            console.log(randomNum);
            return randomNum;
        }
        //Here I assign the random integer function to a variable and then print it
        let computerRandomNumber = rng();
        console.log("Randomly generated number for computer: " + computerRandomNumber);
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-3 fw-bold">Numero randomicamente generato dal computer: <span class="fs-1 fw-bold">${computerRandomNumber}</span></span>
                                    </div>`);
        //Here I add userNum + the PC's randomly generated number for the game's sum and print it
        const sum = parseInt(userNum) + computerRandomNumber;
        console.log(`Sum of user given number (${userNum}) + computer randomly generated number (${computerRandomNumber}): ${sum}`);
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-3 fw-bold">Somma del numero scelto dall'utente (${userNum}) + il numero generato per il computer (${computerRandomNumber}): <span class="fs-1 fw-bold"> ${sum}</span></span>
                                    </div>`);
        /*Here I create a function to check if the sum is odd or even and assign a variable
        odd or even in the respective according case*/
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
        //Here I populate a variable with the string ("pari" or "dispari") result of the sum and print it in DOM and console
        let evenOddSum = sumCheck(sum);
        console.log("The sum is: " + evenOddSum);
        mainContainer.innerHTML += (`<div class="row mb-4">
                                        <span class="fs-3 fw-bold">La somma è: <span class="fs-1 fw-bold">${evenOddSum}</span></span>
                                    </div>`);
        /*Here I create a function to compare userChoice and the two players' sum
        and I use a variable to store the win or loss result if the sum is equal to
        the userChoice (win) or not (loss) and I immediatly summon it afterwards*/
        function result(userChoice, evenOddSum){
            let result = "";
            if(evenOddSum === userChoice){
                result = "win";
                console.log("User won")
                }
            else{
                console.log("User lost")
                result = "lost";
                }
            return result;
        }
        result();
        //Here I assign the function result to a variable and console-print it
        let wonOrLost = result(userChoice, evenOddSum);
        console.log("Result of result function to determine if the sum of userNum and computerRandomNumber is equal to userChoice (odd or even): " + wonOrLost);
        //Here I DOM-print a lost or won message if the player lost or won
        if(wonOrLost === "win"){
            mainContainer.innerHTML += (`<div class="row mb-4">
                                            <span class="fs-1 fw-bold">HAI VINTO!</span>
                                        </div>`);
        }
        else{
            mainContainer.innerHTML += (`<div class="row mb-4">
                                            <span class="fs-1 fw-bold">SFORTUNATAMENTE HAI PERSO..</span>
                                        </div>`);
        }
    }
});

