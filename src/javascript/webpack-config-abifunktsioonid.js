const HtmlWebpackPlugin = require("html-webpack-plugin");
const NAV_TUTVUSTUS = [
    "kes-ma-olen",
    "miks-veebiarendus",
    "mida-juba-oskan",
    "mida-veel-vaja",
    "endast-lahemalt",
    "tugevad-norgad-kuljed",
    "miks-gotoandplay",
];

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
    return lehed;
}

function looLehed() {
    let lehed = [];
    lehed.push(new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/template.html",
    }));
    looTutvustusLehed(lehed);
    return lehed;
}

module.exports = looLehed();