const szamok = [4, 9, 16, 7, 12, 3];
const nevek = ["Anna", "béla", "Csilla", "dávid"];
const termekek = [
  { id: 1, nev: "Egér", ar: 6990, keszlet: 12, kategoria: "periféria" },
  { id: 2, nev: "Billentyűzet", ar: 14990, keszlet: 0, kategoria: "periféria" },
  { id: 3, nev: "Monitor", ar: 54990, keszlet: 3, kategoria: "kijelző" },
  { id: 4, nev: "HDMI-kábel", ar: 1990, keszlet: 40, kategoria: "kábel" },
  { id: 5, nev: "Webkamera", ar: 12990, keszlet: 0, kategoria: "periféria" },
  { id: 6, nev: "USB-C kábel", ar: 2490, keszlet: 25, kategoria: "kábel" },
];


//22.feladat

const vanKeszleten = termekek.filter(termek => termek.keszlet !== 0);
for (const termek of vanKeszleten) {
  console.log(`Név: ${termek.nev}, `);
}
//