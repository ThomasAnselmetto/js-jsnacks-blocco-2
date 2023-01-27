const firstMessageEl = document.querySelectorAll("#green");


const secondMessageEl = document.querySelectorAll("#red");


const numbers = [];

let randomNumber;

randomNumber = Math.floor(Math.random() * 1000) + 1;

numbers.push(randomNumber);

console.log(numbers);

let numeroPari = false;

for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i]; 
    

    if (currentElement % 2 == 0) {
        numeroPari = true;
         
}}

if (numeroPari == true){
    firstMessageEl.innerHtml = "messaggio verde!"
} else {
    secondMessageEl.innerHtml = "messaggio verde!"
}