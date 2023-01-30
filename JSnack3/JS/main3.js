// creo un array di numeri interi e sommo quelli che 

//sommo quelli che  sono in posizione dispari

const numbers = [1,2,3,4,5,6,7]

   let operazione = 0;

let currentNumber;


for (let i = 0; i < numbers.length; i++){

       currentNumber = numbers[i];

    

    if (currentNumber % 2 != 0){
        
        operazione += currentNumber;

    }
}
console.log("il risultato" + operazione);


