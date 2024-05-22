/**
 * in dem erstem schritt soll der benutzer sich eine zahl zwischen 2 und eine 10 aussuchen und niemand soll es sehen. 
in dem zweiten schritt soll der benutzer die seine zahl mit seiner zahl addieren.
in dem dritten schritt soll der benutzer die zahl mit 2 multiplizieren.
in dem vierten schritt soll der benutzer die zahl durch seine zahl teilen.
in dem fünften schritt soll der benutzer schon die antwort sehen und die ist eine 4.
 */


let zufallsZahl = Math.floor(Math.random() * 9) + 2;
let jsErgebnis = zufallsZahl * 2;

document.getElementById("reload").addEventListener("click", function() {
    location.reload();
});

let anweisungen = [
    "Merken Sie sich eine Zahl zwischen 2 und 10",
    "Addieren Sie Ihre Zahl zu sich selbst",
    "Multiplizieren Sie das Ergebnis mit " + zufallsZahl,
    "Teilen Sie Ihr Ergebnis durch Ihre ursprüngliche Zahl"
];

let aktuelleAnweisung = 0;

function naechsteAnweisung() {
    if (aktuelleAnweisung < anweisungen.length) {
        let anweisung = anweisungen[aktuelleAnweisung];
        document.getElementById("question").innerText = anweisung;
        aktuelleAnweisung++;
    } else {
        document.getElementById("answer").innerText = "Das Ergebnis von JavaScript ist: " + jsErgebnis;
    }
}

document.getElementById("next").addEventListener("click", naechsteAnweisung);

naechsteAnweisung();
