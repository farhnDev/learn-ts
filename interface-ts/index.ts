//? interface itu adalah keyword untuk membuat suatu object, yang mana object itu dapat dilakukan untuk extend
//? interface tidak bisa dibuat selain object

// interface User {
//   name: string;
//   age: number;
//   hobi: string;
// }
// //? misal kan kita ingin menambahkan property di dalam interface user ini
// interface User {
//   gender: string;
// }

// let user: User = {
//   name: "Eko",
//   age: 30,
//   hobi: "Main Game",
//   gender: "pria",
// };

// let user2: User = {
//   name: "Lita",
//   age: 30,
//   hobi: "Nangis",
//   gender: "dua duanya",
// };

// console.log(
//     `Nama saya : ${user.name}, usia saya : ${user.age}, hobi saya : ${user.hobi} dan saya seorang : ${user.gender}`
// );
// console.log(
//     `Nama saya : ${user2.name}, usia saya : ${user2.age}, hobi saya : ${user2.hobi} dan saya seorang : ${user2.gender}`
// );

//? extends interface
//? kita akan membuat extend supaya memberikan type khusus pada object tertentu dari interface utama.
interface Kampus {
  name: string;
  tahun: number;
  prestasi: string;
}
interface Fakultas extends Kampus {
  nameFakultas: string;
  jumlahProdi?: number;
}

interface Prodi extends Kampus {
  jumlahAngkatan: number;
  jumlahMahasiswa: number;
}

//? contoh pembuatan variable data dari interface yang sudah di buat

let Himpunan: Fakultas = {
  name: "Himatik",
  tahun: 2020,
  prestasi: "Juara 1 Lomba IT",
  nameFakultas: "Teknik Komputer",
  jumlahProdi: 2,
};
let Prodi: Prodi = {
  name: "Informatika",
  tahun: 2020,
  prestasi: "Juara 1 Lomba IT",
  jumlahAngkatan: 9,
  jumlahMahasiswa: 100,
};

console.log({ Himpunan });
console.log({ Prodi });

let Mahasiswa = (): Prodi => {
  return {
    name: "Eko",
    tahun: 2020,
    prestasi: "Juara 1 Lomba IT",
    jumlahAngkatan: 9,
    jumlahMahasiswa: 100,
  };
};

console.log(Mahasiswa());
