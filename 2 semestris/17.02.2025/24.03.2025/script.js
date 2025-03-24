// 3. uzdevums - Deklarējam divus mainīgos
let a = 10;
let b = 5;

// 4. uzdevums - Izvadām sumu, starpību, reizinājumu un dalījumu
console.log("Summa:", a + b);
console.log("Starpība:", a - b);
console.log("Reizinājums:", a * b);
console.log("Dalījums:", a / b);

// 4.1 uzdevums - Izvadām a pakāpē b un atlikumu
console.log("a pakāpē b:", a ** b);
console.log("Dalījuma atlikums:", a % b);

// 5. uzdevums - Salīdzināšanas konstrukcija
if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else {
    console.log("a ir mazāks par b");
}

// 6. uzdevums - Alternatīva salīdzināšana
switch (true) {
    case a > b:
        console.log("a ir lielāks par b (switch)");
        break;
    case a == b:
        console.log("a ir vienāds ar b (switch)");
        break;
    default:
        console.log("a ir mazāks par b (switch)");
}

// 7. uzdevums - Masīva deklarēšana un inicializācija
let masivs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 8. uzdevums - Izvadām masīva elementus ar for ciklu
console.log("Masīva elementi:");
for (let i = 0; i < masivs.length; i++) {
    console.log(masivs[i]);
}

// 9. uzdevums - Izvadām masīva elementus apgrieztā secībā
console.log("Masīva elementi apgrieztā secībā:");
for (let i = masivs.length - 1; i >= 0; i--) {
    console.log(masivs[i]);
}