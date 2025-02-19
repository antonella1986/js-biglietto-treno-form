/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

/* tools
- const e let
- if else
- console.log
- prompt per chiedere all'utente quanti km vuole percorrere
- prompt per chiedere l'età del passeggero
*/

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