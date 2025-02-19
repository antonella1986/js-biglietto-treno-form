

//PREPARAZIONE

//raccolta dati
const userChoise = Number(prompt ("Quanti km vuoi percorrere?"));
console.log(userChoise);

const userAge = Number(prompt ("Quanti anni hai?"));
console.log(userAge);

const pricePerKm = 0.21;

let priceResult = userChoise * pricePerKm;

//ESECUZIONE

//verifica
if (userAge < 18) {
    priceResult *= 0.80;
} else if (userAge > 65) {
    priceResult *= 0.60;
}

//numero in decimali da stampare in console
console.log(priceResult.toFixed(2));

// select the form input elements
const formEl = document.querySelector(".price")
const nameEl = document.querySelector(".userName")
const kmEl = document.querySelector("km")
const usernameEl = document.querySelector("username")
//continua

console.log(formEl, nameEl.value);

formEl.addEventListener("submit", function(e) {
    e.preventDefault();

    // gather the data
    // potevo mettere il valore in una costante e poi sotto mettere la costante (es. companyEl.value)
    // update the card's values
    cardCompany.innerHTML = companyEl.value
    // continua
    cardImage.src = imageEl.value
})