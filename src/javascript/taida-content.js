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

function saaTootavKaust() {
    let kaustaPuu = window.location.pathname.split('/');
    return kaustaPuu[kaustaPuu.length-2];
}

function teeNoolParemale() {
    let nool = document.createElement("a");
    nool.innerText = ">>";
    return nool;
}

function teeNoolVasakule() {
    let nool = document.createElement("a");
    nool.innerText = "<<";
    return nool;
}

function lisaNoolParemale(navTekst) {
    let noolehoidik = document.querySelector(".noolehoidik");
    let nool = teeNoolParemale();
    const kaust = saaTootavKaust();
    const read = navTekst.split('\n');
    for (let i = 0; i < read.length; ++i) {
        read[i] = read[i].split(';');
        if (read[i][2] === kaust) {
            if (i < read.length - 1) {
                read[i+1] = read[i+1].split(';');
                nool.href = `../${read[i+1][2]}/index.html`;
                noolehoidik.appendChild(nool);
            }
            break;
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            nool.click();
        }
    });
}

function lisaNoolVasakule(navTekst) {
    let noolehoidik = document.querySelector(".noolehoidik");
    let nool = teeNoolVasakule();
    const kaust = saaTootavKaust();
    const read = navTekst.split('\n');
    for (let i = 0; i < read.length; ++i) {
        read[i] = read[i].split(';');
        if (read[i][2] === kaust) {
            if (i > 0) {
                nool.href = `../${read[i-1][2]}/index.html`;
                noolehoidik.appendChild(nool);
            }
            break;
        }
    }
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            nool.click();
        }
    });
}

function lisaNooled(navTekst) {
    let content = document.querySelector(".content");
    let noolehoidik = document.createElement("div");
    noolehoidik.classList.add("noolehoidik");
    content.appendChild(noolehoidik);
    lisaNoolVasakule(navTekst);
    lisaNoolParemale(navTekst);
}

function taidaContentTutvustus(tekst) {
    tuhjendaContent();
    let read = tekst.split("\n");
    lisaHeader(read[0]);
    for (let i = 1; i < read.length; i++) {
        lisaParagraaf(read[i]);
    }
}

export default function taidaContent(tekst, navTekst) {
    taidaContentTutvustus(tekst);
    lisaNooled(navTekst);
};
