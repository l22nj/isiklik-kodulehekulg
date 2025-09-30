function lisaTekstiElement(tekst, tag) {
    let content = document.querySelector(".content");
    let element = document.createElement(tag);
    element.innerText = tekst;
    content.appendChild(element);
}

function lisaHeader(tekst) {
    lisaTekstiElement(tekst, "h1");
}

function lisaParagraaf(tekst) {
    lisaTekstiElement(tekst, "p");
}

function tuhjendaContent() {
    let content = document.querySelector(".content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

export default function taidaContent(tekst) {
    tuhjendaContent();
    let read = tekst.split("\n");
    lisaHeader(read[0]);
    for (let i = 1; i < read.length; i++) {
        lisaParagraaf(read[i]);
    }
}
