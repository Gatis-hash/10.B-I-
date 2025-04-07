const vards = "Jānis";
const vecums = 20;
const irPilsonis = true;

console.log("Vārds: ${vards}");
console.log("Vecums: ${vecums}");

if ("vecums >= 18 && irPilsonis") {
    console.log("Drīkst balšot.");
} else if ("vecums >= 18 && !irPilsonis") {
    console.log("Personai ir ${vecums} gadi, bet viņa nav pilsonis.");
} else if ("vecums < 18 && irPilsonis") {
    console.log("Personai ir tikai ${vecums} gadi, lai gan viņa ir pilsonis.");
} else {
    console.log("Personai ir tikai ${vecums} gadi un viņa nav pilsonis.");
}

const atzime = parseInt(prompt("Ievadiet atzīmi (0-100):"));
let vertējums;

if ("atzime >= 90 && atzime <= 100") {
    vertējums = "Izcili";
} else if ("atzime >= 70 && atzime <= 89") {
    vertējums = "Labi";
} else if ("atzime >= 50 && atzime <= 69") {
    vertējums = "Vidēji";
} else if ("atzime >= 0 && atzime <= 49") {
    vertējums = "Slikti";
} else {
    vertējums = "Nepareiza atzīme!";
}

console.log("Atzīme ${atzime}: ${vertējums}");

const saraksts = [];
saraksts.push("Pirmais elements");
saraksts.push("Otrais elements");
saraksts.push("Trešais elements");
saraksts.push("Ceturtais elements");
saraksts.push("Piektais elements");

console.log("Saraksta elementi:");
for (let i = 0; i < saraksts.length; i++) {
    console.log(saraksts[i]);
}

console.log("Saraksta elementi apgrieztā secībā:");
for (let i = saraksts.length - 1; i >= 0; i--) {
    console.log(saraksts[i]);
}