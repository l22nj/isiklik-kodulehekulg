const tutvustusNupp = document.querySelector("#tutvustus")
const projektidNupp = document.querySelector("#projektid");
const cvNupp = document.querySelector("#cv");

tutvustusNupp.dataset.indeks = "/tutvustus/kes-ma-olen/index.html";
projektidNupp.dataset.indeks = "/projektid/uldiselt-projektidest/index.html";
cvNupp.dataset.indeks = "/cv/minu-cv/index.html";

const nupud = [
    tutvustusNupp,
    projektidNupp,
    cvNupp,
];

for (let nupp of nupud) {
    nupp.addEventListener("click", () => {
        vahetaLehte(nupp);
    });
}

function vahetaLehte(nupp) {
    document.location.href = nupp.dataset.indeks;
}

function saaRead(tekst) {
    return tekst.split('\n');
}

