const firstMessageEl = document.querySelectorAll("#green");


const secondMessageEl = document.querySelectorAll("#red");


const numbers = [
    3,
    5,
    6,
    18,
    29,
    52
];

let firstGreen = true
let firstRed = true


for ( let i = 0; i < numbers.length; i++){
    const thisNumber = numbers[i];
    console.log(thisNumber);
    
    if(thisNumber % 2 == 0){
        
        if(firstGreen){
            firstMessageEl.append(thisNumber);
        }else{
        
            firstMessageEl.append(", " + thisNumber); 
        }

        firstGreen = false
        

    }else{
        
        if(thisNumber % 2 == 0){
        
        if(firstRed){
            secondMessageEl.append(thisNumber);
        }else{
        
            secondMessageEl.append(", " + thisNumber); 
        }

        firstGreen = false

    }
}}