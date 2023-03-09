/* scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65. */

//STRUMENTI UTILIZZATI
//prompt
//if/else
//console.log
//innerhtml
//getElementById/querySelector
//math.random
//function

//chiedo nome e cognome
const txt1 = document.getElementById('nametext');

const btn1 = document.getElementById('btn1');

const out1 = document.getElementById('output1')

function fun1() {
    out1.innerHTML = txt1.value
}

btn1.addEventListener('click',fun1);