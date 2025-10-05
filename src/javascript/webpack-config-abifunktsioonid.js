const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const NAV_TUTVUSTUS = [
    "kes-ma-olen",
    "miks-veebiarendus",
    "mida-juba-oskan",
    "mida-veel-vaja",
    "endast-lahemalt",
    "tugevad-kuljed",
    "norgad-kuljed",
    "miks-gotoandplay",
];

const NAV_PROJEKTID = [
    "uldiselt-projektidest",
    "isiklik-koduleht",
    "hiina-jaagiteoreemi-uldistus",
    "planeerija",
    "ilmajaam",
]

const PILDID = [
    "jakob-pingil.jpeg",
    "lilledk66gis.png",
    "ykssarvik.jpg",
    "jakob-va.jpg"
]

function looTutvustusLehed(lehed) {
    lehed.push(new HtmlWebpackPlugin({
        filename: "tutvustus/index.html",
        template: "./src/template.html",
    }));
    for (let rida of NAV_TUTVUSTUS) {
        rida = rida.split(';');
        lehed.push(new HtmlWebpackPlugin({
            filename: `tutvustus/${rida}/index.html`,
            template: "./src/template.html",
        }));
    }
}

function looProjektiLehed(lehed) {
    lehed.push(new HtmlWebpackPlugin({
        filename: "projektid/index.html",
        template: "./src/template.html",
    }));
    for (let rida of NAV_PROJEKTID) {
        rida = rida.split(';');
        lehed.push(new HtmlWebpackPlugin({
            filename: `projektid/${rida}/index.html`,
            template: "./src/template.html",
        }));
    }
}

function looCvLehed(lehed) {
    lehed.push(new HtmlWebpackPlugin({
        filename: "cv/index.html",
        template: "./src/template.html",
    }));
    lehed.push(new HtmlWebpackPlugin({
        filename: "cv/minu-cv/index.html",
        template: "./src/template.html",
    }));
}

function kopeeriCv(lehed) {
    lehed.push(new CopyWebpackPlugin({
        patterns: [
            {
                from: './src/tekstid/cv/jakoblaanemets_cv.pdf',
                to: "cv/minu-cv/cv.pdf"
            },
        ]
    }))
}

function kopeeriPildid(lehed) {
    for (pilt of PILDID) {
        lehed.push(new CopyWebpackPlugin({
            patterns: [
                {
                    from: `./src/pildid/${pilt}`,
                    to: `isiklik-kodulehekulg/${pilt}`,
                },
            ]
        }))
    }
}

function looLehed() {
    let lehed = [];
    lehed.push(new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/template.html",
    }));
    looTutvustusLehed(lehed);
    looProjektiLehed(lehed);
    looCvLehed(lehed);
    kopeeriCv(lehed);
    kopeeriPildid(lehed);
    return lehed;
}

module.exports = looLehed();