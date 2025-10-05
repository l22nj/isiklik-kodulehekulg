import {lisaNooled, taidaContentTutvustus, taidaContentCv, taidaContentProjektid, taidaContentProjektidIndeks}
    from "./taida-content.js";
import {taidaNav, eemaldaNav} from "./taida-nav.js";
import {tutvustusTekstid, projektidTekstid, navTekstTutvustus, navTekstProjektid, alapealkirjad} from "./tekstifailid";

function saaTootavKaust() {
    let kaustaPuu = window.location.pathname.split('/');
    return kaustaPuu[kaustaPuu.length-2];
}

function saaUlemKaust() {
    let kaustaPuu = window.location.pathname.split('/');
    return kaustaPuu[kaustaPuu.length-3];
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
    taidaContentTutvustus(tutvustusTekstid[indeks]);
    lisaNooled(navTekstTutvustus);
    taidaNav(navTekstTutvustus);
}

function taidaLehtProjektid() {
    let kaust = saaTootavKaust();
    let read = saaRead(navTekstProjektid);
    let indeks = 0;
    if (kaust === "projektid") {
        kaust = read[0].split(';')[2];
        location.href = location.href.split("index.html")[0] + kaust + "/index.html";
    }
    for (let rida of read) {
        rida = rida.split(';');
        if (kaust === rida[2]) {
            indeks = rida[0];
        }
    }
    if (indeks === "0") {
        taidaContentProjektidIndeks(projektidTekstid[indeks]);
    } else {
        taidaContentProjektid(projektidTekstid[indeks], alapealkirjad)
    }
    lisaNooled(navTekstProjektid);
    taidaNav(navTekstProjektid);
}

function taidaLehtCv() {
    taidaContentCv();
    eemaldaNav();
}

export default function taidaLeht() {
    if (saaTootavKaust() === "dist") {
        location.href = location.href.split('/index.html')[0]
            + `/tutvustus/${saaRead(navTekstTutvustus)[0].split(';')[2]}/index.html`;
    }
    if (saaTootavKaust() === "") {
        location.href = location.href + "tutvustus/kes-ma-olen/index.html";
    }
    if (saaTootavKaust() === "isiklik-kodulehekulg") {
        location.href = "/isiklik-kodulehekulg/tutvustus/kes-ma-olen/index.html";
    }
    if (saaUlemKaust() === "tutvustus") {
        taidaLehtTutvustus();
    } else if (saaUlemKaust() === "projektid") {
        taidaLehtProjektid();
    } else if (saaUlemKaust() === "cv") {
        taidaLehtCv();
    }
}