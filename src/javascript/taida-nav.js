function lisaAnkur(tekst, link) {
    let nav = document.querySelector('.nav');
    let ankur = document.createElement("a");
    ankur.innerText = tekst;
    ankur.href = link;
    nav.appendChild(ankur);
}

function tuhjendaNav() {
    let content = document.querySelector(".nav");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

export default function taidaNav(tekst) {
    tuhjendaNav();
    const read = tekst.split('\n');
    for (let rida of read) {
        rida = rida.split(';');
        lisaAnkur(rida[1], "../" + rida[2] + "/index.html");
    }
}