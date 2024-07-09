/*
Schritt-1 Zuerst sieht der Benutzer einen Terminal großen Terminal vor sich und er soll sich eine Zahl 
zwischen 2 und eine 10 aussuchen dabei er darf sie niemandem mitteilen.

Schritt-2 Benutzer soll seine Zahl die er sich gemerkt hat, mit seiner Zahl addieren.

Schritt-3 Benutzer soll die Zahl mit 2 multiplizieren.

Schritt-4 Benutzer soll die Zahl durch seine Zahl teilen.

Schritt-5 Benutzer soll schon die Antwort sehen und die ist seine Endantwort.

Schritt-6 Benutzer soll die Seite neu laden können und nochmal von vorne anfangen.

Schritt-7 Benutzer soll die Anweisungen sehen die er erledigen soll.
*/

let randomNumber = Math.floor(Math.random() * 9) + 2;
let result = randomNumber * 2;

document.getElementById("reload").addEventListener("click", function () {
    location.reload();
});

let infos = [
    "Merken Sie sich eine Zahl zwischen 2 und 10",
    "Addieren Sie Ihre Zahl zu sich selbst",
    "Multiplizieren Sie das Ergebnis mit ",
    "Teilen Sie Ihr Ergebnis durch Ihre ursprüngliche Zahl"
];

let currentInfo = 0;

function nextInfo() {
    if (currentInfo < infos.length) {
        let info = infos[currentInfo];
        if (currentInfo === 2) {
            document.getElementById("randomNumber").innerText = randomNumber;
        } if (currentInfo === 3) {
            document.getElementById("randomNumber").innerText = '';
        }
        document.getElementById("info").innerText = info;
        currentInfo++;
    } else {
        document.getElementById("result").innerText = result;
    }
}

document.getElementById("next").addEventListener("click", nextInfo);

nextInfo();
