// Dato un array contenente i risultati di una squadra (vittorie, pareggi e sconfitte) [W, W, L, X, X, W, L, X], stampare a video il numero di vittorie, il numero di pareggi ed il numero di sconfitte.


const recapResults = document.querySelector("#recap-risultati");

const results = ["W", "W", "L", "X", "X", "W", "L", "X"];

let numberofWins = 0;
let numberofLoses = 0;
let numberoftie = 0;


for (i = 0; i < results.length; i++){

    const currentEl = results[i];

    if(currentEl == "W" ){
        numberofWins++;

    }else if(currentEl == "L" ){
        numberofLoses++;
    }else{
        numberoftie++;
    }
        console.log(numberofWins);
};

recapResults.innerHTML = `${numberofWins} + ${numberofLoses} + ${numberoftie}`;

