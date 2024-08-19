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
