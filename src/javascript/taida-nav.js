function lisaAnkur(tekst, link) {
    let nav = document.querySelector('.nav');
    let ankur = document.createElement("a");
    ankur.innerText = tekst;
    ankur.href = link;
    nav.appendChild(ankur);
}

function tuhjendaNav() {
    let nav = document.querySelector(".nav");
    while (nav.firstChild) {
        nav.removeChild(nav.lastChild);
    }
}

export function eemaldaNav() {
    let nav = document.querySelector('.nav');
    nav.remove();
}

export function taidaNav(tekst) {
    tuhjendaNav();
    let nav = document.querySelector(".nav");
    nav.visible = true;
    const read = tekst.split('\n');
    for (let rida of read) {
        rida = rida.split(';');
        lisaAnkur(rida[1], "../" + rida[2] + "/index.html");
    }
}