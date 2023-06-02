const hobi = ["bola", "ngoding", "nonton film", "berenang"];

const makananFavorit = ["rujak", "ketoprak", "mie ayam"];

const combineArray = (a, b) => {
  const bio = { ...a, ...b };
  return bio;
};

const combinasi = combineArray(hobi, makananFavorit);
console.log(combinasi);

const biodata = {
  nama: " Yabes Elkana Zega ",
  alamat: " Jl. Cempaka Putih Tengah XXVI no 7f Cempaka Putih, jakarta ",
  noHp: "082163990631",
  umur: 25,
  ttl: "Sawit hulu/ 27-04-1997",
};

const newData = {
  kota: " Jakarta ",
  provinsi: " Jakarta ",
  kodepos: "10510 ",
  ProgrammingExperience: ["Html", "css", "php", "javascript", "c++"],
};

const combineObjects = (a, b) => {
  const bio = { ...a, ...b };
  return bio;
};

const combinasiObject = combineObjects(biodata, newData);
console.log(combinasiObject);
