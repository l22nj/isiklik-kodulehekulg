const tutvustusNupp = document.querySelector("#tutvustus")
const projektidNupp = document.querySelector("#projektid");
const cvNupp = document.querySelector("#cv");

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
    document.location.href = `../../${nupp.id}` + "/index.html";
}

