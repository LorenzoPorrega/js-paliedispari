//Here I establish some variable to grab DOM content and elements
const getUserWord= document.querySelector(".word-to-check");
const button = document.querySelector(".btn");
const resultBox = document.querySelector(".result");

//Here I add an addEventListener for when the play button is pressed
button.addEventListener('click', function (){
    //Here I get the user given input and console-print it
    userWord = getUserWord.value;
    console.log(userWord);

    /*Here I check if the user given input is a number. If it is a full number I print
    an alert to notify the user to input a word, otherwise the code goes on*/
    if(isNaN(userWord)){
        //Here I split the user given word into single letters and put it in an array
        let divideWord = userWord.split("");
        console.log(divideWord);

        /*Here I establish a for cycle to reverse the order of the letters in the
        dividedWord array and store them in the reversedWord array*/
        let reversedWord = [];
        for (let i = 0; i < divideWord.length; i++){
            reversedWord.unshift(divideWord[i]);
        }
        console.log(reversedWord);
        
        //Here I re-united the reversedWord into a single word
        let reversedWordUnited = reversedWord.join("");
        console.log(reversedWordUnited);

        /*Here I compare the original user given word to the split, then reverse, then
        re-united word to check if the reversed full word matches the original word, in
        such case original word is palindrome and so I HTML-print an affirmative 
        confirmation message in HTML .result div or viceversa*/
        if (reversedWordUnited === userWord){
            console.log("La parola è palindroma");
            resultBox.innerHTML = `La parola è palindroma!`;
        }
        else{
            console.log("La parola non è palindroma");
            resultBox.innerHTML = `La parola NON è palindroma!`;
        }
    }
    else{
        alert("Non hai inserito una parola. Inserisci una parola formata da lettere!");
        return;
    }
});
