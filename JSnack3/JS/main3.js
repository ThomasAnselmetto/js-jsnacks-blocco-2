// creo un array di numeri interi e sommo quelli che 

//sommo quelli che  sono in posizione dispari

const numbers = [54,59,22,21,3,98,745,24,698,]

   let operazione = 0;

let currentNumber;


for (let i = 0; i < numbers.length; i++){

       currentNumber = numbers[i];

    

    if (currentNumber % 2 !== 0){
        
        operazione = operazione + currentNumber;

    console.log("il risultato" + operazione);
    }
}


