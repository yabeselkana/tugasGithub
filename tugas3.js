const biodata = {
  namaLengkap: "Yabes Elkana Zega",
  email: "yabeszega1997@gmail.com",
  noHp: "082163990631",
  umur: 25,
  ttl: "Sawit hulu/ 27-04-1997",
  alamat: "jalan cempaka putih tengah 26 no 7 f jakarta pusat, jakarta ",
  kota: " Jakarta ",
  provinsi: " Jakarta ",
  kodepos: "10510 ",
  ProgrammingExperience: ["Html", "css", "php", "javascript", "c++"],
  riwayatPendidikan: [
    (sd = {
      nama: "SD N 054808 Sawit Hulu",
      tingkat: " SD",
      tahunMulai: 2003,
      tahunBerakhir: 2009,
      jurusan: null,
      rekomendasi: false,
      lokasi: "Langkat",
      pengajarFavorit: ["Fatizaro Zega", "Rempi Siregar"],
      materiFavorit: [
        (mtk = {
          nama: " Matematika",
          date: 2004,
          pengajar: " Ida ",
          alasan: [" Suka Berhitung ", "Suka perkalian"],
          apakahSulit: false,
        }),
        (ipa = {
          nama: " Ilmu Pengetahuan Alam",
          date: 2004,
          pengajar: " Samosir ",
          alasan: [" Suka dengan tumbutumbuhan  ", "Suka dengan hewan"],
          apakahSulit: false,
        }),
        (agama = {
          nama: " Agama",
          date: 2004,
          pengajar: " Fatizaro Zega",
          alasan: [" Suka dengan hal spiritual  ", "Suka dengan pendekatan diri dengan yang maha Esa"],
          apakahSulit: false,
        }),
      ],
    }),
    (smp = {
      nama: "SMP N 2 Sawit Seberang",
      tingkat: " SMP",
      tahunMulai: 2009,
      tahunBerakhir: 2012,
      jurusan: null,
      rekomendasi: false,
      lokasi: "Langkat",
      pengajarFavorit: ["Irawan", "Agus Tanjung"],
      materiFavorit: [
        (mtk = {
          nama: " Matematika",
          date: 2004,
          pengajar: " Agus Tanjung ",
          alasan: [" Suka Berhitung ", "Suka perkalian"],
          apakahSulit: false,
        }),
        (ipa = {
          nama: " Ilmu Pengetahuan Alam",
          date: 2004,
          pengajar: " Irawan ",
          alasan: [" Suka dengan tumbutumbuhan  ", "Suka dengan hewan"],
          apakahSulit: false,
        }),
        (agama = {
          nama: " Agama",
          date: 2004,
          pengajar: " Fatizaro Zega",
          alasan: [" Suka dengan hal spiritual  ", "Suka dengan pendekatan diri dengan yang maha Esa"],
          apakahSulit: false,
        }),
      ],
    }),
    (sma = {
      nama: "SMA N 1 Padang Tualang",
      tingkat: " SD",
      tahunMulai: 2012,
      tahunBerakhir: 2015,
      jurusan: "IPA",
      rekomendasi: false,
      lokasi: "Langkat",
      pengajarFavorit: ["Danu ", "Naga"],
      materiFavorit: [
        (mtk = {
          nama: " Matematika",
          date: 2004,
          pengajar: " Danu ",
          alasan: [" Suka Berhitung ", "Suka perkalian"],
          apakahSulit: false,
        }),
        (ipa = {
          nama: " Fisika",
          date: 2004,
          pengajar: " Samosir ",
          alasan: [" Suka dengan tumbutumbuhan  ", "Suka dengan hewan"],
          apakahSulit: false,
        }),
        (agama = {
          nama: " Agama",
          date: 2004,
          pengajar: " Ag",
          alasan: [" Suka dengan hal spiritual  ", "Suka dengan pendekatan diri dengan yang maha Esa"],
          apakahSulit: false,
        }),
      ],
    }),
    (universitas = {
      nama: "Politeknuk LP3I Medan",
      tingkat: " Politeknik",
      tahunMulai: 2015,
      tahunBerakhir: 2018,
      jurusan: null,
      rekomendasi: false,
      lokasi: "Medan",
      pengajarFavorit: ["Rizaldi", "Suhardi"],
      materiFavorit: [
        {
          nama: "Web",
          date: 2004,
          pengajar: " Suhardi ",
          alasan: [" Suka Berhitung ", "Suka perkalian"],
          apakahSulit: false,
        },
        {
          nama: "java ",
          date: 2004,
          pengajar: " Rizaldi ",
          alasan: [" Suka dengan tumbutumbuhan  ", "Suka dengan hewan"],
          apakahSulit: false,
        },
        {
          nama: " Agama",
          date: 2004,
          pengajar: " Fatizaro Zega",
          alasan: [" Suka dengan hal spiritual  ", "Suka dengan pendekatan diri dengan yang maha Esa"],
          apakahSulit: false,
        },
      ],
    }),
  ],

  golonganDarah: " O",
  hobi: ["Sepak Bola", "Ngoding", "Tenis Meja"],
  makananFavorit: [
    {
      nama: "Arsik",
      asal: "Medan",
    },
    {
      nama: "Mie Aceh ",
      asal: " Aceh",
    },
    {
      nama: " Mie Gomak",
      asal: "Balige",
    },
  ],
};

console.log("soal 3");

console.log("Nama Lengkap :", biodata["namaLengkap"]);
console.log("Nomor Hanphone :", biodata["noHp"]);
console.log("Nama Lengkap :", biodata["namaLengkap"]);
console.log("Proggraming Experien :", biodata["ProgrammingExperience"]);
console.log("Nama dan asal makanan favorit index pertama:", biodata.makananFavorit["0"]);
console.log("Hobi index terakhir :", biodata.hobi["2"]);
console.log("Nama materi dan pengajar materi favorit:", biodata.riwayatPendidikan[0].materiFavorit);
