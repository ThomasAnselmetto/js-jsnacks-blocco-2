const messageEl = document.getElementById("output-by");


const numbers = [];

let randomNumber;

randomNumber = Math.floor(Math.random() * 100) + 1;

numbers.push(randomNumber);

console.log(numbers);


 let hoTrovatoUnNumpari = false;

for (let i = 0; i < numbers.length; i++) {
    const currentElement = numbers[i]; 
    

    if (currentElement % 2 == 0) {
         hoTrovatoUnNumpari = true;
         messageEl.innerHTML = "bravo!"
        } else {
            messageEl.innerHTML = "ricarica la pagina";
        }
    }
// }
//  if (hoTrovatoUnNumpari = true){
//           messageEl.innerHTML = currentElement;
