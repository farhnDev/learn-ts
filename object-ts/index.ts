let mahasiswa = {
  nama: "lita",
  umur: 22,
  aktif: true,
};  //? object 1


interface Mahasiswa {
    nama: string;
    umur: number;
    aktif: boolean;
    }  //? object yang tanpa di inisialisasiikan dari awal nilaiinya dan bisa di timpa dengan nilai baru


// mahasiswa = {
//     nama: "asep",
//     umur: 22,
//     aktif: true,
//     };  //? object 2
// mahasiswa.prodi = "informatika"; //! ini tidak bisa menambahkan kalau key pada object aatau property nya tidak sama
console.log({ mahasiswa });
