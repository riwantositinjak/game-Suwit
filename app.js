const pilihanKamu = document.getElementById("user");
const pilihanKomputer = document.getElementById("comp");
const hasilSuwit = document.getElementById("hasil");
const kemungkinanPilihan = document.querySelectorAll("button");
let pilihanMu;
let kompPilihan;
let hasilAkhir;

kemungkinanPilihan.forEach((kemungkinan) => {
  kemungkinan.addEventListener("click", (e) => {
    pilihanMu = e.target.id;
    pilihanKamu.innerHTML = pilihanMu;
    komputerPilihan();
    dapatkanHasil();
  });
});

function komputerPilihan() {
  const angkaAcak = Math.floor(Math.random() * 3) + 1;
  if (angkaAcak === 1) {
    kompPilihan = "Gunting";
  }
  if (angkaAcak === 2) {
    kompPilihan = "Batu";
  }
  if (angkaAcak === 3) {
    kompPilihan = "Kertas";
  }
  pilihanKomputer.innerHTML = kompPilihan;
}

function dapatkanHasil() {
  if (kompPilihan === pilihanMu) {
    hasilAkhir = "DRAW";
  }
  if (kompPilihan === "Gunting" && pilihanMu === "Batu") {
    hasilAkhir = "SELAMAT KAU MENANG";
  }
  if (kompPilihan === "Gunting" && pilihanMu === "Kertas") {
    hasilAkhir = "KALAH KAU BAH";
  }
  if (kompPilihan === "Batu" && pilihanMu === "Kertas") {
    hasilAkhir = "SELAMAT KAU MENANG";
  }
  if (kompPilihan === "Batu" && pilihanMu === "Gunting") {
    hasilAkhir = "KALAH KAU BAH";
  }
  if (kompPilihan === "Kertas" && pilihanMu === "Gunting") {
    hasilAkhir = "SELAMAT KAU MENANG";
  }
  if (kompPilihan === "Kertas" && pilihanMu === "Batu") {
    hasilAkhir = "KALAH KAU BAH";
  }
  hasilSuwit.innerHTML = hasilAkhir;
}
