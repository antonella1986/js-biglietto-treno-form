//numero in decimali da stampare in console
console.log(priceResult.toFixed(2));

// select the DOM elements
const formEl = document.querySelector(".price")
const kmEl = document.querySelector(".km")
const ageEl = document.querySelector("age")
const nameEl = document.querySelector("name")
const passengerEl = document.querySelector("passenger-name")
const offerEl = document.querySelector("offer-name")
const wagonEl = document.querySelector("wagon")
const cpCodeEl = document.querySelector("cp-code")
const priceEl = document.querySelector("ticket-price")

const pricePerKm = 0.21
const minorDiscount = 0.20
const seniorDiscount = 0.40
let ticketPrice
let discountName

console.log(formEl, ageEl, kmEl, pricePerKm, minorDiscount, seniorDiscount, ticketPrice);

// add an event listener to the form listen for the submit element
formEl.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // read and save km and age values from the selected inputs
    const kmValue = kmEl.value
    const ageValue = ageEl.value
    const nameValue = nameEl.value
    
    // elaboration of the ticket price
    ticketPrice = kmValue * pricePerKm;
    
    console.log(ticketPrice, kmEl, ageValue, nameValue);

    
    // verify user age and apply discount
    if (ageValue === "minor") {
        console.log(20% off);
        ticketPrice -= ticketPrice * minorDiscount
    } else if (ageValue === "senior") {
        console.log(40% off);
        ticketPrice -= ticketPrice * seniorDiscount
    } else {
        discountName = "Standard ticket"
    }
            
    // update the DOM and print ticket data
    passengerEl.innerText = nameValue
    offerNameEl.innerText = discountName
    priceEl.innerText = ticketPrice
})
