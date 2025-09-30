import taidaContent from "./taida-content.js";
import taidaNav from "./taida-nav.js";
import { tutvustusTekstid, navTekstTutvustus } from "./tekstifailid";

function saaTootavKaust() {
    let kaustaPuu = window.location.pathname.split('/');
    return kaustaPuu[kaustaPuu.length-2];
}

function saaRead(tekst) {
    return tekst.split('\n');
}

function taidaLehtTutvustus() {
    let kaust = saaTootavKaust();
    let read = saaRead(navTekstTutvustus);
    let indeks = 0;
    if (kaust === "tutvustus") {
        kaust = read[0].split(';')[2];
        location.href = location.href.split("index.html")[0] + kaust + "/index.html";
    }
    for (let rida of read) {
        rida = rida.split(';');
        if (kaust === rida[2]) {
            indeks = rida[0];
        }
    }
    taidaContent(tutvustusTekstid[indeks]);
    taidaNav(navTekstTutvustus);
}

export default function taidaLeht() {
    taidaLehtTutvustus();
}