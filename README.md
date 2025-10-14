# Isiklik kodulehekülg
* Ennast tutvustav kodulehekülg!
* Siit saab näha mind tutvustavat videot, minu oskusi ja projekte.
* Tuleb ettevaatlik olla sellega, et veebilehe toimimiseks githubi lehel peab olema mõnel failil erinev sisu, kui nt `npx webpack serve` kohaliku serveriga.
## Mis failides tuleb teha muutusi GitHubi lehe ja kohaliku serveri vahel vahetamiseks?
### GitHub
1) Failis src/javascript/pohinupud.js peab nuppude `dataset.indeks` väärtuste alguses olema `"/isiklik-kodulehekulg"`
2) Failis src/javascript/webpack-config-abifunktsioonid.js peab funktsiooni `kopeeriPildid` definitsioonis objekti CopyWebpackPlugin `to` välja väärtuse algusest `"isiklik-kodulehekulg/"` ära võtma.
3) Valmis!
### Kohalik server
* Tuleb teha vastupidised sammud eelmisele sektsioonile.
## Kuidas lisada lehti?
### /tutvustus
1) Lisa faili /src/tekstid/tutvustus/nav.txt rida: 'i;Kuvatud pealkiri;navigeerimis-pealkiri', kus i on mingi indeks.
2) Lisa faili /src/javascript/webpack-config-abifunktsioonid.js sõnede massiivi `NAV_TUTVUSTUS` uus element `"navigeerimis-pealkiri"`.
3) Lisa kausta src/tekstid/tutvustus uus tekstifail (võib tegelikult olla oma valitud nimega) {i+1}-navigeerimis-pealkiri.txt.
4) Failis src/javascript/tekstifailid.js lisa rida: `import minuFail from ../tekstid/tutvustus/{i+1}-navigeerimis-pealkiri.txt`.
5) Samas failis lisada massiivi `tutvustusTekstid` uus element nimega `minuFail`.
6) Valmis!
### /projektid
* Analoogne eelmise sektsiooniga.
## Kuidas lisada pilte?
1) Kopeeri soovitud pilt kausta src/pildid
2) Failis src/javascript/webpack-config-abifunktsioonid.js lisa muutujasse `PILDID` element `"pildi-faili-nimi.jpg"` (või mingi muu failitüüp peale jpg).
3) Soovitud tekstifailis pildi kasutamiseks tuleb kasutada aadressit /isiklik-kodulehekulg/pildi-faili-nimi.jpg
4) Valmis!
## Kuidas lisada muid faile?
1) Kopeeri fail oma soovitud kohta
2) Loo faili src/javascript/webpack-config-abifunktsioonid.js funktsioon sobiva CopyWebpackPlugin objektiga funktsioon.
3) Lisa selle funktsiooni väljakutse funktsiooni `looLehed` definitsiooni.
4) Valmis!
