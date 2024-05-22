/**
 * in dem erstem schritt soll der benutzer sich eine zahl zwischen 2 und eine 10 aussuchen und niemand soll es sehen. 
in dem zweiten schritt soll der benutzer die seine zahl mit seiner zahl addieren.
in dem dritten schritt soll der benutzer die zahl mit 2 multiplizieren.
in dem vierten schritt soll der benutzer die zahl durch seine zahl teilen.
in dem fünften schritt soll der benutzer schon die antwort sehen und die ist eine 4.
 */

let randomNumber = Math.floor(Math.random() * 99) + 2;
let result = randomNumber * 2;

document.getElementById("reload").addEventListener("click", function() {
    location.reload();
});

let infos = [
    "Merken Sie sich eine Zahl zwischen 2 und 100",
    "Addieren Sie Ihre Zahl zu sich selbst",
    "Multiplizieren Sie das Ergebnis mit ",
    "Teilen Sie Ihr Ergebnis durch Ihre ursprüngliche Zahl"
];

let currentInfo = 0;

function nextInfo() {
    if (currentInfo < infos.length) {
        let info = infos[currentInfo];
        if (currentInfo === 2) { // Wenn es der dritte Schritt ist
            document.getElementById("randomNumber").innerText = randomNumber;
        } else if (currentInfo === 3) { // 
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
