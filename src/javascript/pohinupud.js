import {navTekstTutvustus, navTekstProjektid} from "./tekstifailid";

const tutvustusNupp = document.querySelector("#tutvustus")
const projektidNupp = document.querySelector("#projektid");
const cvNupp = document.querySelector("#cv");

tutvustusNupp.dataset.indeks = saaRead(navTekstTutvustus)[0].split(';')[2];
projektidNupp.dataset.indeks = saaRead(navTekstProjektid)[0].split(';')[2];

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
    document.location.href = `../../${nupp.id}/${nupp.dataset.indeks}/index.html`;
}

function saaRead(tekst) {
    return tekst.split('\n');
}

