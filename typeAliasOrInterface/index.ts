//? type alias, itu dapat dibuat dengan type apapun, kalau interface hanya bisa object
//! type alias tidak dapat dibuat dengan nama yang sama, sedangkan interface bisa
//* objectnya diperluas dengan tanda & (and) sedangkan interface dengan extends

//! contoh type alias nama yang sama
// type Mahasiswa = {
//     name:string;
//     nim: string;
// }                    //! tidak bisa tuh
// type Mahasiswa = {
//     prodi :string;
//     gender :string;
//     usia: number;
// }

// interface Mahasiswa {
//     name:string;
//     nim: string;
// }
// interface Mahasiswa {  //! ini bisa karena interface
//     prodi :string   ;
//     gender :string;
//     usia: number;
// }

//? jadi kalau embuat type itu ya data yang kiranya valid dan tidak ada penambahan data lagi

// type Mahasiswa = {
//     name:string;
//     nim: string;
// }
// type MahasiswaDetail = Mahasiswa & {  //? menggabungkan type alias nya dengan & (and) dan seperti extends di interface dan kalau deklarasi ulang ya gk bisa
//     prodi :string;
//     gender :string;
//     usia: number;
// }
//? maka dengan seperti ini kita bisa membuat type alias yang lebih spesifik
//! atau bisa juga dengan cara seperti ini
// type Mahasiswa = {
//   name: string;
//   nim: number;
// };

// type Alumni = {
//   gender: string;
//   pekerjaan: string;
// };
// //? nah di atas ini ada 2 type yang telah dibuat dan itu terpisah, lalu kita ingin menggabungkan 2 type tersebut

// let orang: Mahasiswa & Alumni = {
//   name: "Eko",
//   nim: 123456,
//   gender: "pria",
//   pekerjaan: "Developer",
// };
// console.log({ orang });

// //? dan kalau mau lebih cepat misalnya kita ingin membuat variable baru yang memiliki type yang sama itu, bisa dengan membuat type dan lakukan & dengan type keduanya.

// type DataLengkap = Mahasiswa & Alumni; //? cara seperti ini lah.

// let data: DataLengkap = {
//   name: "asep",
//   nim: 123456,
//   gender: "pria",
//   pekerjaan: "Developer",
// };

// console.log({ data });

//? kita akan buat contoh type yang mirip seperti extend di interface

type Mahasiwa = {
  name: string;
  nim: number;
};
type Biodata = {
  gender: string;
  pekerjaan: string;
  usia: number;
};
type Pribadi = {
  alamat: string;
  noTelp: number;
};

type Rumah = Mahasiwa & Pribadi;

type Data = Mahasiwa & Biodata;

let rumah: Rumah = {
  name: "asep",
  nim: 123456,
  alamat: "jl. Indramayu",
  noTelp: 123456789,
};
let data: Data = {
  name: "eko",
  nim: 123456,
  gender: "pria",
  pekerjaan: "Developer",
  usia: 30,
};

console.log({
  alamat: `Rumah ${rumah.name} di jalan ${rumah.alamat} dengan no telp ${rumah.noTelp}`,
  background: `dan ${data.name} adiknya berjenis kelamin ${data.gender} dengan pekerjaan ${data.pekerjaan} dan usia nya ${data.usia} tahun`,
});
